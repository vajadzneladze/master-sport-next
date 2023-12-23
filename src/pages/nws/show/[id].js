import Head from 'next/head'
import axios from "../../../lib/axios"
import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router";
import Block from '../../../components/News/Block'
import LeftProjects from "../../../components/Shared/LeftProjects";

export default function show({article,content,projects,project_page}) {
  const { t } = useTranslation('common')
  const { locale,asPath } = useRouter();
  const url_without_slug = asPath.split("/");
  url_without_slug.pop();
  const news_url = url_without_slug.join('/')+"/";
  const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}/${locale}${asPath}`;
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() =>{
      setFadeIn(true);
    },[]);
  useEffect(() => {
    document.body.classList.add('whiteBg')
    return () => {
      document.body.classList.remove('whiteBg')
    }
  }, [])
    return <>
            <Head>
                <title>{article && article.info.title}</title>
                <meta name="description" content={article && article.info.description} />
                <meta name="keywords" content={article && article.info.keywords} />
                <meta property="og:title" content={article && article.info.title}/>
                <meta property="og:description" content={article && article.info.description} />
                {article && <meta property="og:image" content={article && article.info.cover.url} />}
          </Head>
          <LeftProjects proeqtebi={t('proeqtebi')} kliki={t('projects_with_1_click')} projects={projects ? projects : []} page={projects ? project_page : []}/>
          <Container className="newsPageShow slideRight">
            <Row>
              <Col md={8}>
                <img src={article && article.info.cover.url} className="w-100"/>
                <span className="date">{article && article.created_at}</span>
                <h1 className="title">{article && article.info.title}</h1>
                <div className="description" dangerouslySetInnerHTML={{__html: article && article.info.text}}></div>

                <div className="share">
                    <span>{t('gaziareba')}:</span>

                    <ul className='socials'>
                            <li><a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`} target="_BLANK"></a></li>
                    </ul>
                </div>
              </Col>
              <Col md={3} className="news_block in_block offset-md-1">
              {content && content.map((item) => {
                  return <Block key={item.id} url={"/"+locale+news_url+item.id+'-'+item.info.slug} src={item.info.cover.url} date={item.created_at} title={item.info.title} description={item.info.description}/> })}
              </Col>
            </Row>
          </Container>
        </>
}
export async function getServerSideProps({locale,query}) {   
    return {props: {
     ...(await axios((locale??'en')+'/news/show/'+query.id)).data
   }
 } }