import Head from 'next/head'
import axios from "../../lib/axios"
import Pagination from "../../components/Shared/Pagination"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useRouter } from "next/router";
import Block from '../../components/News/Block'
import LeftProjects from "../../components/Shared/LeftProjects";
import useTranslation from 'next-translate/useTranslation'

export default function news({page,content,projects,project_page}) {
    const { locale,asPath } = useRouter();
    const URL = `/${locale}${asPath}`;
    const news_url = URL.split('?')[0]+'/';
    useEffect(() => {
      document.body.classList.add('whiteBg')
      return () => {
        document.body.classList.remove('whiteBg')
      }
    }, [])
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() =>{
      setFadeIn(true);
    },[]);  


    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;
    const onPageChange = (page) => {
      setCurrentPage(page);
    };
    const { t } = useTranslation('common')
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

          <LeftProjects proeqtebi={t('proeqtebi')} kliki={t('projects_with_1_click')} projects={projects ? projects : []} page={projects ? project_page : []}/>
      
          <Container className="newsPage slideRight">
            {page && <><h1>{page.info.title}</h1><p>{page.info.description}</p></>}
            <Row className="news_block">
              {content && content.data.map((item) => {
                return <Col md={4} key={item.id}>
                  <Block url={news_url+item.id+'-'+item.info.slug} src={item.info.cover.url} date={item.created_at} title={item.info.title} description={item.info.description}/>
                </Col>;
              })}
            </Row>


            <Pagination
       items={content && content.total} 
       currentPage={currentPage} 
       pageSize={pageSize}
       onPageChange={onPageChange}
        />

          </Container>

            
          </>
      )
}
 /*
export async function getStaticPaths() {
  const res = await axios('ka/newsPaths')
  const paths = res.data.map((page) => ({
    params: { id: page.id.toString() },
  }))

  return {
    paths,
    fallback: true
  }
}
*/
export async function getServerSideProps({locale,query}) {
  return {props: {
      ...(await axios((locale)+'/news/?id='+query['id']+'&page='+query['page'])).data
    }
  } 
}