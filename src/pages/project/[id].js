import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import axios from "../../lib/axios"
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function project({page,projects}) {
    const { t } = useTranslation('common')
    const [fadeIn, setFadeIn] = useState(false);
    const [condition, setCondition] = useState(0);
    const slideRef = useRef(null);
    const { locale } = useRouter();

    const Settings = {
        dots: false,
        arrows:false,
        infinite: false, 
        speed: 500,
        variableWidth:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
          {
            breakpoint:992,
            settings:{
              slidesToShow:2
            }
          },
          {
            breakpoint:550,
            settings:{
              slidesToShow:1
            }
          }
        ]
      };

    useEffect(() =>{
      setFadeIn(true);
    },[]);  

    useEffect(() => {
        document.getElementById('footer').classList.add('hide')
        return () => {
          document.getElementById('footer').classList.remove('hide')
        }
      }, [])

    function nextSlide(){
        slideRef.current.slickNext();
    }
    function prevSlide(){
        slideRef.current.slickPrev();
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
              <div className="projectPage customPaddingLeft">
                <h1>{page && page.info.description}</h1>
                <div className="text" dangerouslySetInnerHTML={{__html: page && page.info.text}}></div>
                <Container className="mobileSort">
                    <ul className="sortProject">
                        <li className={
                    condition == 1 ? "active" : ""
                  }><a href="#" onClick={(e)=>{e.preventDefault();setCondition(1)}}>{t('mimdinare')}</a></li>
                        <li className={
                    condition == 2 ? "active" : ""
                  }><a href="#" onClick={(e)=>{e.preventDefault();setCondition(2)}}>{t('dasrulebuli')}</a></li>
                    </ul>
                </Container>

             
                <Slider ref={slideRef} {...Settings}>
                            {projects && projects.filter(item=>item.condition == condition || condition == 0).map((item,key)=>{
                              let url = '/'+locale+'/'+page.info.slug+'/'+item.id+'-'+item.info.slug+'/';
                              if(item.sectors == 1){
                                url += item.sector.info.slug;
                              }
                            return <div key={key} className='projectBlock'><Link href={ url }>
                              {item && item.info.cover && <div className="projectImg"><img src={item.info.cover.url} alt={item.info.title} /><div className="hover">
                                <div className="top">
                                    <p>{item.info.title}</p>
                                    {item.condition == 2 && <span>{t('dasrulebuli')}</span>}
                                </div>
                                <div className="bottom">
                                  {item.info.description}
                                </div>
                                </div></div>}
                              <span>{t('ux_development')}</span>
                              <span className="title">{item.info.title}</span>                              
                              </Link>
                            </div>    
                          })}    
                  </Slider>
                  <Container>
                    {projects && projects.length > 1 && <ul className="slideArrows"><li className="leftArrow" onClick={prevSlide}><span></span></li><li className="rightArrow" onClick={nextSlide}><span></span></li></ul>}
                  </Container>

               </div>
              
            </CSSTransition>
       
            
           
       
          </>
      )
}

export async function getStaticPaths() {
  const res = await axios('ka/projectPaths')
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
      ...(await axios((locale)+'/project/?id='+params['id'])).data
    },
    revalidate: 10
  } 
}