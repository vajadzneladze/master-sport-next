import axios from "../../lib/axios"
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CSSTransition } from 'react-transition-group';
import Accordion from 'react-bootstrap/Accordion';
export default function faq({page,projects,categories,faqs}) {
  const [fadeIn, setFadeIn] = useState(false);
  const [activeProject, setProject] = useState(0);
  const [activeCategory, setCategory] = useState(0);


    useEffect(() => {
        document.body.classList.add('whiteBg')
        return () => {
          document.body.classList.remove('whiteBg')
        }
      }, [])
      useEffect(() =>{
        setFadeIn(true);
        if(projects.length > 0){
          setProject(projects[0].id);
          if(categories.length > 0){
            setCategory(categories[0].id);
          }
        }
       },[]);  

    return (<>
        <Head>
                <title>{page && page.info.title}</title>
                <meta name="description" content={page && page.info.description} />
                <meta name="keywords" content={page && page.info.keywords} />
                <meta property="og:title" content={page && page.info.title}/>
                <meta property="og:description" content={page && page.info.description} />
                {page && <meta property="og:image" content={page && page.info.image} />}
          </Head>
  <div className="faqPage">
      <div className="background"></div>
  
      <Container>
        <Row>
          <Col md={4}>
              <h1>{page && page.info.description}</h1>
              <div className="projects">
                  { projects && projects.map((item,key) => {
                  return <div key={key} className={
                    activeProject == item.id ? "project active" : "project"
                  } onClick={(e)=>setProject(item.id)}>{item.info.title}
                  <div className={
                    activeProject == item.id ? "categories active" : "categories"
                  }>
                    {categories.map((cat,ctKey) =>{
                        return <div key={ctKey} className={
                          activeCategory == cat.id ? "category active" : "category"
                        } onClick={(e)=>setCategory(cat.id)}>{cat.info.title}</div>
                    })}</div>
                  </div>
                })}
              </div>
          </Col>
          <Col md={8}>
                <h1>{page && page.info.description}</h1>
                <div className="questions">
                {faqs && faqs.filter(item => (item.category_id == activeCategory || activeCategory == 0) && (item.project_id == activeProject || activeProject == 0)).map(item => {
                  return <Accordion  key={item.id}>
                  <Accordion.Item eventKey={item.id}>
                    <Accordion.Header>{item.info.title}</Accordion.Header>
                    <Accordion.Body dangerouslySetInnerHTML={{__html: item.info.text}}>
                    </Accordion.Body>
                  </Accordion.Item>                 
                </Accordion> })}
                </div>
          </Col>
        </Row>
      </Container>
    </div></>)
}

export async function getStaticPaths() {
  const res = await axios('ka/faqPaths')
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
      ...(await axios((locale)+'/faq/?id='+params['id'])).data
    },
    revalidate:10
  } 
}