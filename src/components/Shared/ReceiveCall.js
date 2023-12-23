import useTranslation from 'next-translate/useTranslation'
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Axios from 'axios'
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';

export default function ReceiveCall(){
    const { t } = useTranslation('common')
    const { locale } = useRouter();
    const [translateYBottom, setTranslateYBottom] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() =>{
        setTranslateYBottom(true);
      },[]);

      const [form,setForm] = useState({
        'name':'',
        'phone' : '',
        'when':''
    });


      const sendMessage = async (e) => {
        e.preventDefault();

        let formData = new FormData();    
        formData.append('name',form.name); 
        formData.append('phone',form.phone);
        formData.append('when',form.when);
        let post_url = process.env.NEXT_PUBLIC_BACKEND_URL.replace('http://','https://');

        Axios.post(post_url+'/'+locale+'/callSend',formData).then(res => {
          if(res){
           toast.success(res.data.message)
           setForm({'name':'','phone':'','when':''});
           setFadeIn(false);
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
  

    return (<>     
      <div className={fadeIn ? "popupBg active" : 'popupBg'} onClick={(e)=>setFadeIn(false)}></div>
    <div className={fadeIn ? "callPopup active" : 'callPopup'}>
            <span className="closePopup" onClick={(e)=>setFadeIn(false)}></span>

            <h1>{t('receive_call')}</h1>
            <div className="text">
                {t('receive_call_text')}
            </div>
        
            <form onSubmit={sendMessage}>
            <Row>
                <div className="col-6">
                    <input placeholder={t('saxeli')} name='name' value={form.name} required onChange={(e)=>{changeData(e)}} />
                </div>
                <div className="col-6" >
                    <input  placeholder={t('phone')} name='phone' value={form.phone} required onChange={(e)=>{changeData(e)}} />
                </div>
                <div className='col-12'>
                    <input placeholder={t('rodis_dagikavshirdet')} name='when' value={form.when} required onChange={(e)=>{changeData(e)}} />
                </div>
                <div className='col-12'>
                    <button type='submit'>{t('gagzavna')}</button>
                </div>
                </Row>
                </form>
          
    </div>

        <CSSTransition
        timeout={700}        
        in={translateYBottom}
        classNames="translateYBottom"  
        nodeRef={nodeRef}                
        ><span className='customButton receiveCall' ref={nodeRef} onClick={(e)=>{setFadeIn(true)}}>
    <span></span>{t('receive_call')}</span></CSSTransition>
    
    <Toaster
		  toastOptions={{
    className: 'myToast'
  }}
  position="bottom-right"
  reverseOrder={false}
/>
    </>);
}