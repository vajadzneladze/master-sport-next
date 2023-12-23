import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import axios from "../../../lib/axios"
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import MapPro from "../../../components/MapPro"
import ReceiveCall from '../../../components/Shared/ReceiveCall';
import LeftProjects from "../../../components/Shared/LeftProjects";
import RightFloors from "../../../components/Shared/RightFloors";

export default function projectShow(props){
    const { t } = useTranslation('common')
    const [fadeIn, setFadeIn] = useState(false);
    const [load, setLoad] = useState(false);    
    let router= useRouter()

    useEffect(() =>{
      setFadeIn(true);
      if(window.location.href.includes('#')){
        router.push(window.location.href.split('#')[0]);
      }
    },[]);  

    useEffect(() => { 
        const timer = setTimeout(() => {
          setLoad(true);
        }, 50);
      
      return () => {
        clearInterval(timer)
      }
    }, [props.project])

    useEffect(() => {   
    
        document.getElementById('footer').classList.add('hide')
        window.addEventListener('hashchange', hashchange);
        return () => {
            document.getElementById('footer').classList.remove('hide')
            window.addEventListener('hashchange', hashchange);
        }
      }, [])

      function hashchange(){
        router.push(window.location.href.replace('#','/'))
      }


    
      return (   
       <>         
          <Head>
                <title>{props.project && props.project.info.title}</title>
                <meta name="description" content={props.project && props.project.info.description} />
                <meta name="keywords" content={props.project && props.project.info.keywords} />
                <meta property="og:title" content={props.project && props.project.info.title}/>
                <meta property="og:description" content={props.project && props.project.info.description} />
                {props.project && <meta property="og:image" content={props.project && props.project.info.image} />}
 
                <script src="/mapPro/dist/js/image-map-pro.min.js" ></script>
      
                <link href="/mapPro/dist/css/image-map-pro.min.css" rel="stylesheet" type="text/css"></link>                
          </Head>      
          <CSSTransition
              timeout={1000}        
              in={fadeIn}
              classNames="fadeIn"                 
              >   
              <div className="slideRight projectShow">
                <div className="heading">
                  {props.project && <h1>{props.project.info.sub_title}</h1>}
                  {props.project && <p>{props.project.info.description}</p>}
                </div>

{load && props.project && props.project.sector && <MapPro map={props.project.sector.info.map} floors={props.project.sector.floor}/>}
 <LeftProjects proeqtebi={t('proeqtebi')} kliki={t('projects_with_1_click')} projects={props.projects} page={props.page} ux={t('ux_development')}/>
                <ReceiveCall />
                {props.project&& props.project.sector && <RightFloors floors={props.project.sector.floor}  />}
                </div>
        </CSSTransition>
          </>
      )
}

export async function getStaticPaths() {
  const res = await axios('ka/sectorAllPaths')
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
      ...(await axios((locale)+'/retreive_sector/?id='+params['id'])).data,
      ...(await axios((locale)+'/project/')).data
    },
    revalidate:10
  }
}