import Head from 'next/head'
import React, { useEffect, useState,useRef } from "react";
import axios from "../../lib/axios"
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function timeline({page,projects,timeline}) {
    const [fadeIn, setFadeIn] = useState(false);
    const [popupBg, setpopupBg] = useState({'active':0,'covers':[]});
    const [obj, setObj] = useState({'title':null,'description':null});
    const [activeProject, setProject] = useState(0);
    const sliderRef = useRef(null);
    const popupRef = useRef(null);
    const navRef = useRef(null);
    useEffect(() =>{
      setFadeIn(true);
      projects && projects.length > 0 && setProject(projects[0].id);
    },[]);  

    if(popupRef.current)popupRef.current.slickGoTo(0)
    if(timeline && timeline.length > 0 && activeProject > 0 && timeline.filter(time => (time.project_id == activeProject)).length == 0 && obj.title != null){ setObj({'title':null,'description':null});  }
    useEffect(() => {
      document.body.classList.add('whiteBg')
      return () => {
        document.body.classList.remove('whiteBg')
      }
    }, [])
    const settingsProject = {
      dots: false,
      arrows:false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint:600,
          settings:{
            infinite:true,
            centerMode:false,
            variableWidth:false,
            slidesToShow:1
          }
        }
      ],
    };

    const imageSettings = {
      dots: false,
      arrows:true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor:navRef.current
    };
    const imageNavSettings = {
      dots: false,
      arrows:true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor:popupRef.current
    };

    const settings = {
      dots: false,
      arrows:true,
      infinite: false,
      className: "center",
      centerMode: true,
      speed: 500,
      variableWidth:true,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint:992,
          settings:{
            infinite:true,
            centerMode:false,
            variableWidth:false,
            slidesToShow:1
          }
        }
      ],
      afterChange:(current)=>{
        if(timeline && timeline[current])
        setObj({'title':timeline[current].info.title,'description':timeline[current].info.description});
      },
      onInit:()=>{
        if(timeline && timeline.length > 0)
          setObj({'title':timeline && timeline[0].info.title,'description': timeline && timeline[0].info.description});
      }
    };
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
     
         <Container className="timelinePage">
            <h1>{page && page.info.title}</h1>


            <div className="projects">
            <Slider {...settingsProject}>
              {projects && projects.map((item,key) => {
                return <div className={
                  (activeProject == item.id) ? "project active" : "project"
                } key={item.id} onClick={(e)=>{e.preventDefault();setProject(item.id); sliderRef.current.slickGoTo(0)}}>
                  {item.info.title}  
                </div>
              })}
            </Slider>
          </div>

            <Slider ref={sliderRef}  {...settings} >
              {timeline && timeline.filter(time => (time.project_id == activeProject)).map((item,key)=>{
              return <div key={key} className="timeBlock">
                <div className="timelineBlock" onClick={(e)=>{e.preventDefault(); sliderRef.current.slickGoTo(key);}  }>
                  <h3>{item.month}</h3>
                  <span>{item.year}</span>
                </div>

                <div className="infoBlock">
                  <img src={item.info.cover.url} className="timelineImage" onClick={(e)=>setpopupBg({'active':1,'covers':item.info.covers}) } />
                </div>
              </div>    
            })}    
        </Slider>

        <div className="infoBlock fullWidth">
          <h1>{obj.title}</h1>
          <p>{obj.description}</p>
        </div>
         </Container>
         <div className={
                  (popupBg.active) ? "popupBg active" : "popupBg"
                } onClick={(e)=>setpopupBg({'active':0,'covers':[]})}></div>
                <div className={
                  (popupBg.active) ? "popupImages active" : "popupImages"
                }>
                  <img src="/closePopup.png" className="closePopup" onClick={(e)=>setpopupBg({'active':0,'covers':[]})} />
                <Slider ref={popupRef} {...imageSettings}>
                          {popupBg.covers.map((item,key)=>{
                          return <div key={key}>
                            <img src={item.url} />
                          </div>    
                        })}    
                </Slider>
                <div className="navSlide">
                  <Slider ref={navRef} {...imageNavSettings}>
                            {popupBg.covers.map((item,key)=>{
                            return <div key={key} className='navImage'>
                              <img src={item.url} />
                            </div>    
                          })}    
                  </Slider>
                </div>
                </div>
          </>
      )
}

export async function getStaticPaths() {
  const res = await axios('ka/timelinePaths')
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
      ...(await axios((locale)+'/timeline/?id='+params['id'])).data
    },
    revalidate:10
  } 
}