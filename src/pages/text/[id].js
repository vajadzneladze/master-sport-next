import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import axios from "../../lib/axios"
import { useEffect, useState } from 'react';
import ReceiveCall from '../../components/Shared/ReceiveCall';
import TextBlock from '../../components/Shared/TextBlock';
import ReactPlayer from 'react-player'
import LeftProjects from "../../components/Shared/LeftProjects";


export default function page({page,block,block_2, projects}) {
    const { t } = useTranslation('common')
    const [hasWindow, setHasWindow] = useState(false);
    const [videoswitch, setvideo] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    //const router = useRouter()
    //const slug = router.asPath
    useEffect(() =>{
      setFadeIn(true);
    },[]);  

    useEffect(() => {
      document.body.classList.add('whiteBg')
      return () => {
        document.body.classList.remove('whiteBg')
      }
    }, [])

    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);

    const handleVideo = () => {
      if (videoswitch) {
          setvideo(false);
          document.querySelector("video").play();
      } else {
          setvideo(true);   
          document.querySelector("video").pause();       
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
          
          <LeftProjects proeqtebi={t('proeqtebi')} kliki={t('projects_with_1_click')} projects={projects ? projects.projects : []} page={projects ? projects.page : []}/>
          
            <ReceiveCall />
           
              <div className="slideRight">
                        {page && <TextBlock title={t('chven')} description={page.info.description} text={page.info.text} />}
                        {page && <img className="textCover w-100" src={page.cover} /> }
                        {block && <TextBlock title='' description={block.info.title} text={block.info.text} />}
              </div> 

            {page && page.video &&
            <div className="video">
            {hasWindow && <ReactPlayer  width="100%" height="auto" url={page.video} id='video' />}
                  <div className="controls">
                    <p onClick={handleVideo}><span className="play"></span>{videoswitch ? t('videos_chartva') : t('video_pause')}</p>
                  </div>
            </div>}
            {block_2 && <TextBlock title='' description={block_2.info.title} text={block_2.info.text} />  }        
       
          </>
      )
}
export async function getStaticPaths() {
    const res = await axios('ka/textPaths')
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
      ...(await axios((locale)+'/text/?id='+params['id'])).data,
      'projects':{...(await axios((locale)+'/project/')).data}
    },
    revalidate: 10
  } 
}