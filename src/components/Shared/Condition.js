import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

export default function Condition({block,ukan,setConditionPage}){
    const [fadeIn, setFadeIn] = useState(false);
    const [rightExpand, setRightExpand] = useState(false);
    const [expandUp, setExpandUp] = useState(false);
    const [expandText, setExpandText] = useState(false);
    useEffect(() =>{
        setFadeIn(true);
        setRightExpand(true);
        setExpandUp(true);
        setExpandText(true);
      },[]);

      function exit(e){
        e.preventDefault();
        setFadeIn(false);
        setRightExpand(false);
        setExpandUp(false);
        setExpandText(false);
        const timer = setTimeout(() => {
            setConditionPage(false)
          }, 500);        
      }

    return <div  className={
        (fadeIn) ? "conditionPage active" : "conditionPage"
      }><div className="relative">
            <Container>
                <Row>
                    <Col md={12} className="back">
                        <a href="#" onClick={(e)=>{exit(e)}}><span></span> {ukan}</a>
                    </Col>

                    <Col md={6} className="forScroll">
                    <CSSTransition
                timeout={1000}        
                in={rightExpand}
                classNames="rightExpand"                 
                >  
                        {block && <h1>{block.info.title}</h1>}
                   </CSSTransition>
                   <CSSTransition
                timeout={1000}        
                in={expandText}
                classNames="expandText"                 
                >  
                            <div className='text'>{block && <div dangerouslySetInnerHTML={{__html:block.info.text}} />}<img src={block.info.cover.url} className='conditionImg forMobile' /></div>

                     </CSSTransition>
                    </Col>
                    <Col md={6} className="hideforMob">
                    <CSSTransition
                timeout={1000}        
                in={expandUp}
                classNames="expandUp"                 
                >  
                        {block && <img src={block.info.cover.url} className='conditionImg' />}
                        </CSSTransition>
                    </Col>
                </Row>
            </Container></div>
        </div>
}