import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from "../../../lib/axios"
import Head from 'next/head'

flat.layout = "floor";

export default function flat(props){   

    let router= useRouter()

    useEffect(() => {   
            document.body.classList.add('whiteBg')
            document.getElementById('footer').classList.add('hide')          
            for(let i=0;i<document.getElementsByClassName("mapPro").length;i++){  
            document.getElementsByClassName("mapPro")[i].addEventListener("click", mapProSmallClick);
          }
        return () => {
            document.getElementById('footer').classList.remove('hide')
            document.body.classList.remove('whiteBg')
            for(let i=0;i<document.getElementsByClassName("mapPro").length;i++){  
              document.getElementsByClassName("mapPro")[i].removeEventListener("click", mapProSmallClick);
            }          
        }
      }, [])

      useEffect(() =>{
        props.setFlatIn(true);
        props.setFloorExpand(true);
        props.setBgExpand(true);  
        props.setFlatSlug(props.flat);      
      },[]); 

      function mapProSmallClick(e){
        e.preventDefault();
        props.setFlatIn(false);   
        router.push(window.location.href.split('/').slice(0,-1).join('/'),null,{ shallow: true })
      }
      
    return <>
        
    <Head>
                <title>{props.flat && props.flat.info && (props.flat.info.meta.facebook.og.title ? props.flat.info.meta.facebook.og.title : props.flat.info.title)}</title>
                <meta name="description" content={props.flat && props.flat.info && (props.flat.info.meta.facebook.og.description ? props.flat.info.meta.facebook.og.description : props.flat.info.description)} />
                <meta name="keywords" content={props.flat && props.flat.info && (props.flat.info.meta.meta_keywords ? props.flat.info.meta.meta_keywords : props.flat.info.keywords)} />
                <meta property="og:title" content={props.flat && props.flat.info && (props.flat.info.meta.facebook.og.title ? props.flat.info.meta.facebook.og.title : props.flat.info.title)}/>
                <meta property="og:description" content={props.flat && props.flat.info && (props.flat.info.meta.facebook.og.description ? props.flat.info.meta.facebook.og.description : props.flat.info.description)} />
                {props.project && <meta property="og:image" content={props.flat && props.flat.info && props.flat.info.image} />} 
                <script src="/mapPro/dist/js/image-map-pro.min.js" ></script>      
                <link href="/mapPro/dist/css/image-map-pro.min.css" rel="stylesheet" type="text/css"></link>                
    </Head> 

        </>
}





export async function getStaticPaths() {
  const res = await axios('ka/flatAllPaths')
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
       ...(await axios((locale)+'/retreive_flat/?id='+params['id'])).data,
       ...(await axios((locale)+'/project/')).data
      },
      revalidate:10
    }
  }