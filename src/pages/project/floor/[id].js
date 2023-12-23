import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from "../../../lib/axios"
import Head from 'next/head'

floor.layout = "floor";
export default function floor(props){   
    let router= useRouter()
    useEffect(() => {   
            document.body.classList.add('whiteBg')
            document.getElementById('footer').classList.add('hide')
        return () => {
            document.getElementById('footer').classList.remove('hide')
            document.body.classList.remove('whiteBg')
        }
      }, [])

      useEffect(() =>{
        props.setBgExpand(true);
      },[]); 

      useEffect(() => {   
        window.addEventListener('hashchange', hashchange);
        return () => {
          window.removeEventListener('hashchange', hashchange);         
        }
      }, [])

      function hashchange(){
          props.setFlatSlug(props.floor.flats.find(item => item.info.slug == window.location.href.split("#")[1]));
          props.setFlatIn(true);
          props.setFloorExpand(true);
          props.setBgExpand(true);             
          router.push(window.location.href.replace('#','/'))
      }
      

    return <>
    <Head>
                <title>{props.floor && props.floor.project.info.title}</title>
                <meta name="description" content={props.floor && props.floor.project.info.description} />
                <meta name="keywords" content={props.floor && props.floor.project.info.keywords} />
                <meta property="og:title" content={props.floor && props.floor.project.info.title}/>
                <meta property="og:description" content={props.floor && props.floor.project.info.description} />
                {props.project && <meta property="og:image" content={props.floor && props.floor.project.info.image} />} 
                <script src="/mapPro/dist/js/image-map-pro.min.js" ></script>      
                <link href="/mapPro/dist/css/image-map-pro.min.css" rel="stylesheet" type="text/css"></link>                
    </Head> 
        <Container className={
                  (!props.floorExpand) ? "floorPage slideRight active" : "floorPage slideRight"
                }>
            <Row>
                <Col lg={4}>
                    <h1>{props.floor && props.floor.project.info.sub_title}</h1>
                </Col>
                <Col lg={8}>
                    <p>{props.floor && props.floor.project.info.description}</p>
                </Col>       
            </Row>
        </Container>
        </>
}



export async function getStaticPaths() {
  const res = await axios('ka/floorsAllPaths')
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
       ...(await axios((locale)+'/retreive_floor/?id='+params['id'])).data,
       ...(await axios((locale)+'/project/')).data
      },
      revalidate:10
    }
  }