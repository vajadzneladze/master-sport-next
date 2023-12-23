import useTranslation from 'next-translate/useTranslation'
import ReceiveCall from '../Shared/ReceiveCall';
import LeftProjects from "../Shared/LeftProjects";
import RightInfo from "../Shared/RightInfo"
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState,useRef } from 'react';
import React,{ Fragment } from "react";
import RightFloors from "../Shared/RightFloors";
import Condition from "../Shared/Condition";
import Calculator from "../Shared/Calculator";
import MapPro from "../MapPro"
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function FloorLayout({ children }){    
    const { t } = useTranslation('common')
    const [floorExpand, setFloorExpand] = useState(false);

    const [bgExpand, setBgExpand] = useState(false);
    const [flatIn, setFlatIn] = useState(false);
    const [activeFlat, setFlatSlug] = useState({});
    const [conditionPage, setConditionPage] = useState(false);
    const [calculatorPage, setCalculatorPage] = useState(false);

    const settings = {
      dots: true,
      arrows:false,
      infinite: false,
      speed: 500,
      margin:10,
      variableWidth:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };




    let router= useRouter()

    function backFloor(e){
        e.preventDefault();
        if(flatIn){
          setFlatIn(false);   
          router.push(window.location.href.split('/').slice(0,-1).join('/'),null,{ shallow: true })
        }
    }

    function recursiveMap(children, fn) {
        return React.Children.map(children, child => {
          if (!React.isValidElement(child) || typeof child.type == 'string') {
            return child;
          }
      
          if (child.props.children) {
            child = React.cloneElement(child, {
              children: recursiveMap(child.props.children, fn)
            });
          }
      
          return fn(child);
        });
      }

      const childrenWithProps = recursiveMap(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { floorExpand: floorExpand, setFloorExpand:setFloorExpand, bgExpand:bgExpand,setBgExpand:setBgExpand,flatIn:flatIn,setFlatIn:setFlatIn, activeFlat:activeFlat, setFlatSlug:setFlatSlug })
        }
    
        return child;
      });

      function nextFlat(e){
        e.preventDefault();
        let flat =children.props.floor?.flats.find(item => item.info.slug > activeFlat.info.slug && item.status == 1);
        if(flat){
          setFlatSlug(flat);
          router.push(window.location.href.split('/').slice(0,-1).join('/')+'/'+flat.info.slug,null,{ shallow: true })
        }
      }
      
      function prevFlat(e){
        e.preventDefault()
        let flat =children.props.floor?.flats.find(item => item.info.slug < activeFlat.info.slug && item.status == 1);
        if(flat){
          setFlatSlug(flat);
          router.push(window.location.href.split('/').slice(0,-1).join('/')+'/'+flat.info.slug,null,{ shallow: true })
        }
      }

      function convertPrice(price){
        return (price*children.props.nbg).toFixed(2);
      }

      useEffect(() => {
        const handleScroll = (event) => {
          if(window.scrollY > 0){
            if(!floorExpand){setFloorExpand(!floorExpand); setBgExpand(!bgExpand);}
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    return (
    <>{calculatorPage && <Calculator 
            endMonth={children.props.floor.project.endMonth}
            setCalculatorPage={setCalculatorPage} 
            floor={children.props.floor?.info?.title}
            block={children.props.floor?.sector?.info.title}
            flat={activeFlat}
            installment_price={activeFlat.installment_price*children.props.nbg}
            living_area={activeFlat.living_area}
            summer_area={activeFlat.summer_area}
            full_installment={(activeFlat.installment_total_price * children.props.nbg)} 
            total_payment={(activeFlat.total_price * children.props.nbg)} 
            first_tax={activeFlat.first_tax * children.props.nbg}/>}<div className={calculatorPage ? 'floorShowHide' : floorExpand ? 'floorShow active' : 'floorShow'} onWheel={e=>{if(!floorExpand){setFloorExpand(!floorExpand); setBgExpand(!bgExpand);}}} >
        {conditionPage && children.props.block && <Condition block={children.props.block} ukan={t('ukan_dabruneba')} setConditionPage={setConditionPage}/>}
        
            <ReceiveCall />
            <LeftProjects proeqtebi={t('proeqtebi')} kliki={t('projects_with_1_click')} projects={children.props.projects} page={children.props.page} ux={t('ux_development')}/>
            <CSSTransition
                timeout={1000}        
                in={flatIn}
                classNames="translateXLeft"                 
                >  
        <div className={
                  (flatIn) ? "backFloor active" : "backFloor"
                } >
          <a href="#" onClick={(e)=>{backFloor(e)}}><span></span> {t('sartulze_dabruneba')}</a>
        </div>
        </CSSTransition>

        <RightInfo 
          floor={children.props.floor} 
          faq_page={children.props.faq_page} 
          floorExpand={floorExpand} 
          flat={flatIn ? true : false} 
          setConditionPage={setConditionPage} 
          setCalculatorPage={setCalculatorPage} 
          forMobile="mobileNone"
          />

        <CSSTransition
                timeout={1000}        
                in={bgExpand}
                classNames="bgExpand"                 
                >  
                <div className={
                  (flatIn) ? "fullBg bgWidth" : "fullBg"
                } ></div>
        </CSSTransition>

            {childrenWithProps}

         
               
        <CSSTransition
                timeout={1000}        
                in={floorExpand}
                classNames="floorExpand"                 
                > 
            <div className={flatIn ? "flCont floorExpand-enter-done flatActive" : (floorExpand ? "flCont floorExpand-enter-done" : "flCont")}>
              <div className={
                  (!floorExpand) ? "downArrow active" : "downArrow"
                } onClick={(e)=>{setFloorExpand(!floorExpand); setBgExpand(!bgExpand)}}></div>
                <div className={flatIn ? "floorBg flatActive" : "floorBg"}>  
                    {<div className={
                  (flatIn) ? "flatTitle active" : "flatTitle"
                }><span className='green'>{children.props.floor && children.props.floor.info && children.props.floor.info.title}</span> {t('floor')} <span className='slash'>|</span> {t('flat')} <span className='green'>{activeFlat && activeFlat.info && activeFlat.info.title}</span></div>}

                <div className={
                  (activeFlat && activeFlat?.info && flatIn) ? "flatPics active" : "flatPics"
                } >
                <Slider {...settings}>
              {activeFlat && activeFlat?.info && activeFlat?.info.covers.map((item,key) => {
                return <img src={item.url} key={key} />
              })}
            </Slider>
                </div>

                <div className={flatIn ? "flatInfo flatActive" : "flatInfo"}>
                <RightInfo 
                  floor={children.props.floor} 
                  faq_page={children.props.faq_page} 
                  floorExpand={floorExpand} 
                  flat={flatIn ? true : false} 
                  setConditionPage={setConditionPage} 
                  setCalculatorPage={setCalculatorPage} 
                  forMobile={"rightInfo"}
                  />
                <div className="rightMap">
                <MapPro map={children.props.floor?.info.map} floors={children.props.floor?.flats} flatt={t('flat')} floor={true} flat={activeFlat} active_flat={activeFlat} />
                  </div>
                </div>

                <div className={(activeFlat && activeFlat?.info && flatIn) ? "flatPrices active" : "flatPrices"}>
                  <div className="priceBlock">
                    <p>{t('ertiani_gadaxda')}</p>
                    <span>{activeFlat && activeFlat.info && children.props.nbg && convertPrice(activeFlat.full_price)} ₾</span>
                  </div>
                  <div className="priceBlock">
                    <p>{t('ganvadebit_gadaxda')}</p>
                    <span>{activeFlat && activeFlat.info && children.props.nbg && convertPrice(activeFlat.installment_price)} ₾</span>
                  </div>
                  <div className="priceBlock">
                    <p>{t('m')}<span className="subIndex">2</span></p>
                    <span>{activeFlat && activeFlat.info && (activeFlat.living_area + activeFlat.summer_area).toFixed(2)}</span>
                  </div>               
                </div>

                <div className={(activeFlat && activeFlat.info && flatIn) ? "flatChanges active" : "flatChanges"}>
                    <span className='leftArrow' onClick={(e)=>{prevFlat(e)}}></span>{t('gadacvale_bina')}<span className='rightArrow' onClick={(e)=>{nextFlat(e)}}></span>
                </div>

                <div className="rooming">
                {<table className={
                  (flatIn) ? "table tableRooms active" : "table tableRooms"
                }><tbody>
                    {activeFlat && activeFlat.info && activeFlat.info.meta.rooms.map((item,index) =>{
                        return <tr key={index+1} className={index > parseInt(activeFlat.info.meta.rooms.length/2) ? "hideH":""}><td>{index+1}</td><td>{item.title}</td><td>{item.area} {t('m')}<span className="subIndex">2</span></td></tr>
                    })}
                </tbody></table>}

                {<table className={
                  (flatIn) ? "table tableRooms secondPart active" : "table tableRooms"
                }><tbody>
                    {activeFlat && activeFlat.info && activeFlat.info.meta.rooms.map((item,index) =>{
                        return <tr key={index+1} className={index < Math.round(activeFlat.info.meta.rooms.length/2) ? "hideH":""}><td>{index+1}</td><td>{item.title}</td><td>{item.area} {t('m')}<span className="subIndex">2</span></td></tr>
                    })}
                </tbody></table>}</div>

                <div className={(activeFlat && activeFlat.info && flatIn) ? "flatChanges forMob active" : "flatChanges"}>
                    <span className='leftArrow' onClick={(e)=>{prevFlat(e)}}></span>{t('gadacvale_bina')}<span className='rightArrow' onClick={(e)=>{nextFlat(e)}}></span>
                </div>

                
                </div>
                {children.props.floor && <CSSTransition              
                timeout={1000}        
                in={flatIn}
                classNames="scale"                 
                ><MapPro map={children.props.floor?.info.map} floors={children.props.floor?.flats} flatt={t('flat')} floor={true} flat={activeFlat} active_flat={activeFlat} /></CSSTransition>}
            </div>
         </CSSTransition>
         <RightInfo 
          floor={children.props.floor} 
          faq_page={children.props.faq_page} 
          floorExpand={floorExpand} 
          flat={flatIn ? true : false} 
          setConditionPage={setConditionPage} 
          setCalculatorPage={setCalculatorPage} 
          forMobile={flatIn ? "mobileShowInfo flatActive" : "mobileShowInfo"}
          />

            {floorExpand && !flatIn && children.props.floor && <CSSTransition
                    
                in={flatIn}
                classNames="fadeOut"                 
                ><RightFloors floors={children.props.floor?.sector?.floor} activeIndex={children.props.floor?.info.slug-1} floor={true} /></CSSTransition>}
            </div></>
    )
}