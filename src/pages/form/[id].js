import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import axios from "../../lib/axios"
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../../components/Map"
import Marker from "../../components/Marker"
import Image from 'next/image'
import Axios from 'axios'
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';


export default function form({page,branch_head,branch_sale,facebook,linkedin,instagram,phone,email,address}) {
    const { t } = useTranslation('common')
    const { locale } = useRouter();
    const [fadeIn, setFadeIn] = useState(false);
    const [activeMarker,setMarker] = useState(null);
    const [sendPopup,setSendPopup] = useState(0);

    const [form,setForm] = useState({
      'name':'',
      'lastname' : '',
      'email':'',
      'contact_message':''
    });

    useEffect(() =>{
      setFadeIn(true);
    },[]);  

    useEffect(() => {
      document.body.classList.add('whiteBg')
      document.getElementById('footer').classList.add('hide')
      return () => {
        document.body.classList.remove('whiteBg')
        document.getElementById('footer').classList.remove('hide')
      }
    }, [])

    function handleMarkerClick(id){
        setMarker(id);
    }

    const sendMessage = async (e) => {
        e.preventDefault();

        let formData = new FormData();    
        formData.append('name',form.name); 
        formData.append('lastname',form.lastname);
        formData.append('email',form.email);
        formData.append('contact_message',form.contact_message);
        let post_url = process.env.NEXT_PUBLIC_BACKEND_URL.replace('http://','https://');

        Axios.post(post_url+'/'+locale+'/mailSend',formData).then(res => {
          if(res){
           toast.success(res.data.message)
           setForm({'name':'','lastname':'','email':'','contact_message':''});
			setSendPopup(0);
          }
        }).catch(error => {
          console.log(error);
        });

        
    }

    function changeData(e){
      e.preventDefault();
      setForm(prevData => {
        return {
            ...prevData,
            [e.target.name]:e.target.value
        }
      })
    }

      return (   
       <>         
          <Head>
                <title>{page && page.info.title}</title>
                <meta name="description" content={page && page.info.description} />
                <meta name="keywords" content={page && page.info.keywords} />
                <meta property="og:title" content={page && page.info.title}/>
                <meta property="og:description" content={page && page.info.description} />
                {page && <meta property="og:image" content={page && page.info.image} />}
          </Head>
      
            <CSSTransition
              timeout={1000}        
              in={fadeIn}
              classNames="fadeIn"                 
              >   
              <div className="map">
                <div className="leftSide">
                    <h1>{t('head_office')}</h1>
                    <ul>
                        {branch_head && branch_head.map(item => {
                          return  <li className={
                            activeMarker == item.id ? "forMarker active" : "forMarker"
                          } key={item.id} onClick={(e)=>handleMarkerClick(item.id)}>{item.info.title}</li>
                        })}                        
                    </ul>
                    <h1>{t('sale_office')}</h1>
                    <ul>
                    {branch_sale && branch_sale.map(item => {
                           return <li className={
                            activeMarker == item.id ? "forMarker active" : "forMarker"
                          } key={item.id} onClick={(e)=>handleMarkerClick(item.id)}>{item.info.title}</li>
                        })} 
                    </ul>

                    <ul className='socials'>
                            {facebook && <li><a className="facebook" href={facebook} target="_BLANK"></a></li>}
                            {instagram && <li><a className="instagram" href={instagram} target="_BLANK"></a></li>}
                            {linkedin && <li><a className="linkedin" href={linkedin} target="_BLANK"></a></li>}
                          </ul>
                </div>

                <Wrapper apiKey={"AIzaSyD57p7riAcYGaRvC4eNg0yrJewPFKgpigM"} >
                        <Map zoom={14} center={{"lat":branch_head && branch_head[0].info.map[0].position.lat,"lng":branch_head && branch_head[0].info.map[0].position.lng}} >

                        {branch_sale && branch_sale.concat(branch_head).map((item) => (                            
                            <Marker key={item.id} id={item.id} title={item.info.title} img={item.info.cover && item.info.cover.url} icon="/pinIcon.png" position={{"lat":item.info.map[0].position.lat,"lng":item.info.map[0].position.lng}} activeMarker={activeMarker} />
                        ))}
                        </Map>
                </Wrapper>
                <button className="sendMessage" onClick={(e)=> {setSendPopup(1)}}>{t('send_contact')} <Image src="/sendContact.svg" width="24" height="24" alt="send" /></button>

        <div className={
                            sendPopup ? "sendDiv active" : "sendDiv"
                          }>
            <h1>{page && page.info.description}</h1>
            <Image src={"/icons/closeIcon.svg"}
                            alt="closeIcon"
                            width="22"
                            height="22"
                            className="sendPopupClose"
                            onClick={e=>{setSendPopup(false)}}
                            />
            <form onSubmit={sendMessage}>
                <div className="form">
                    <input name="name" onChange={(e)=>{changeData(e)}} placeholder={t('saxeli')} value={form.name} className='form-control' id='name' required/>
                    <input name="lastname" onChange={(e)=>{changeData(e)}} placeholder={t('gvari')} value={form.lastname} className='form-control' id='lastname' required/>
                    <input name="email" onChange={(e)=>{changeData(e)}} placeholder={t('email')} value={form.email} className='form-control' id='email' required/>
                    <textarea name="contact_message" onChange={(e)=>{changeData(e)}} value={form.contact_message} className='form-control' placeholder={t('shetyobineba')} id='message' required>

                    </textarea>
                </div>
                <button className="sendBtn" type='submit' >{t('gagzavna')}</button>
                
            </form>
            <ul className="contactInfo">
                <li><a href={"tel:"+phone}><Image src="/phone.svg" width="17" height="17" alt="Send Message" /> {phone}</a></li>
                <li><a href={"mailto:"+email}><Image src="/mail.svg" width="17" height="17" alt="Send Mail" /> {email}</a></li>
                <li><Image src="/pinAddress.svg" width="17" height="17" alt="Address" /> {address}</li>
            </ul>

            <ul className="contactInfo contactMobile">
             
                <li><Image src="/pinAddress.svg" width="17" height="17" alt="Address" /> {address}</li>
                <li className='centerCont'>
                        <ul className='socials'>
                            {facebook && <li><a className="facebook" href={facebook} target="_BLANK"></a></li>}
                            {instagram && <li><a className="instagram" href={instagram} target="_BLANK"></a></li>}
                            {linkedin && <li><a className="linkedin" href={linkedin} target="_BLANK"></a></li>}
                        </ul>
                </li>
                <li></li>
            </ul>
        </div>
              </div> 
            </CSSTransition>
          <Toaster
		  toastOptions={{
    className: 'myToast'
  }}
  position="bottom-right"
  reverseOrder={false}
/>
       
          </>
      )
}

export async function getStaticPaths() {
  const res = await axios('ka/formPaths')
  const paths = res.data.map((page) => ({
    params: { id: page.id.toString() },
  }))

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({locale,params}) {
  return {props: {
      ...(await axios((locale)+'/form/?id='+params['id'])).data
    },
    revalidate:10
  } 
}