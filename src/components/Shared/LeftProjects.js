import { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";

export default function LeftProjects({proeqtebi,kliki,projects,page}){
    const [show, setShow] = useState(false);
    const { locale } = useRouter();
    useEffect(() => {
        const handleMouseMove = (event) => {
          if(document.querySelectorAll('.allProjects.active').length > 0){
            if(event.clientX < 410){
              document.getElementsByClassName('forShowBg')[0].style.opacity=1;
              document.getElementsByClassName('forShowBg')[0].style.height = '100vh';
              document.getElementsByClassName('forShowBg')[0].style.zIndex = '4';

              document.getElementsByClassName('forBg')[0].style.opacity = '0';
              document.getElementsByClassName('forBg')[0].style.height = '0';
              document.getElementsByClassName('forBg')[0].style.zIndex = '0px';
            }else{
              document.getElementsByClassName('forShowBg')[0].style.height = '0px';
              document.getElementsByClassName('forShowBg')[0].style.zIndex = '0';
              document.getElementsByClassName('forShowBg')[0].style.opacity = '0';

              document.getElementsByClassName('forBg')[0].style.opacity = '1';
              document.getElementsByClassName('forBg')[0].style.height = '100vh';
              document.getElementsByClassName('forBg')[0].style.zIndex = '4';
            }
          }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleMouseMove
          );
        };

      }, []);

      function clickHandle(){
		 if(document.getElementsByClassName('slideRight').length > 0){
        if(!show)
          document.getElementsByClassName('slideRight')[0].style.left = window.innerWidth > 768 ? '410px' : '255px';
        else
          document.getElementsByClassName('slideRight')[0].style.left = '0px';
		 }
        
          document.getElementsByClassName('forBg')[0].style.height = '0';
          document.getElementsByClassName('forBg')[0].style.zIndex = '0px';
          
          document.getElementsByClassName('forShowBg')[0].style.height = '0';
          document.getElementsByClassName('forShowBg')[0].style.zIndex = '0px';
        setShow(!show);
      }

    

    return (
        <>
        
        <div className="forShowBg"></div>
            <div onClick={ clickHandle} className={
                show ? "leftProjects active" : "leftProjects"
              }>
                <div className="bg" ></div>
                <h1>{proeqtebi}</h1>
                <p>{kliki}</p>
            </div>
            <div className={
                show ? "allProjects active" : "allProjects"
              } >
                <div className="forBg"></div>
                      <div className="scrolling">
                            {projects && projects.map((item,key)=>{
                            return <div key={key} className='projectBlock'><Link href={'/'+locale+'/'+page.info.slug+'/'+item.id+'-'+item.info.slug}>
                              {item && item.info.cover && <img src={item.info.cover.url} alt={item.info.title} />}
                                <span className="title">{item.info.title}</span>
                                <p className="desc">{item.info.description}</p>
                              </Link>
                            </div>    
                          })}    
               </div>
            </div>
        </>
       );
}