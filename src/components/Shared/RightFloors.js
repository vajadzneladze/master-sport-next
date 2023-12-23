import { useEffect, useState, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router";
import Slider from "react-slick";

export default function RightFloors(props){
    const { t } = useTranslation('common')
    const [activeIndex, setIndex] = useState(-1);
    const [activeRange, setActiveRange] = useState({});
    const [heights, setHeightSum] = useState({});
    const slideRef = useRef(null
      );
    let router= useRouter()

    
    const settings = {
      dots: false,
      arrows:false,
      infinite: false,
      variableWidth:true,
      speed: 500,
      slidesToScroll: 1,  
      slidesToShow: 2,     
    };

    useEffect(() => {
        let needFloorResize = true;
        if(needFloorResize)
            handleResize();
        return () => {
            needFloorResize = false;
        }
      }, [])

      useEffect(() => {
        if(props.activeIndex){
          //let reversedIndex = (props.floors.length - props.activeIndex)-1;
          setIndex(props.activeIndex);
        }
       },[]);
       

    function clickedFloor(i,slug){
        setIndex(i);
        if(props.floor == true){
          router.push(window.location.href.split('/').slice(0,-1).join('/')+"/"+slug)
        }else{
          setHoverOnPolygon(i);
        }
    }
    
    function clickedFloorReverse(i,slug){
      let all = document.querySelectorAll('#image-map-pro-container polygon');      
      setIndex(i);
      if(props.floor == true){
        router.push(window.location.href.split('/').slice(0,-1).join('/')+"/"+slug)
      }else{
        let s = (all.length - all[i].getAttribute('data-index'))-1;
        setHoverOnPolygon(s);
      }
    }

    function nextSlide(){ 
        if(activeIndex == -1 || activeIndex == props.floors.length-1){
          return false;
        }else{
          handleResize(activeIndex+1,'next')
          setIndex(activeIndex+1);
          if(props.floor){
            router.push(window.location.href.split('/').slice(0,-1).join('/')+"/"+props.floors[activeIndex+1].info.slug)
         
          }else{
            setHoverOnPolygon(activeIndex+1);
          }           
        }
      }

      function prevSlide(){
        if(activeIndex == -1){
          setIndex(props.floors.length-2);
          router.push(window.location.href.split('/').slice(0,-1).join('/')+"/"+props.floors[props.floors.length-2].info.slug)

          if(!props.floor){
            setHoverOnPolygon(props.floors.length-2);
          }
        }else{
          if(activeIndex == 0){
            return false;
          }
          setIndex(activeIndex-1);      
          handleResize(activeIndex-1,'prev');     
          if(props.floor){
            router.push(window.location.href.split('/').slice(0,-1).join('/')+"/"+props.floors[activeIndex-1].info.slug)
        
          }else{
            setHoverOnPolygon(activeIndex-1);
          }  
        }        
      }

      function setHoverOnPolygon(activeIndex){
        document.querySelector('#image-map-pro-container polygon.active').classList.remove('active');
        let all = document.querySelectorAll('#image-map-pro-container polygon');
        let reversedIndex = (all.length - all[activeIndex].getAttribute('data-index'))-1;
        document.querySelector('#image-map-pro-container polygon[data-index="'+(reversedIndex)+'"]').classList.add('active');
      }
   

    function handleResize(index=null,dir=null){
        let header_height = 105
        let bottom_height = 60;
        let item_height = 42;
        let arrows = 96;
        let count = 4;
        let offset = 150
        if(window.innerHeight < 600){
          count = 3;
          offset= 50;
        }
        let right_height = window.innerHeight-offset - header_height - bottom_height;    
        let sum = item_height * count;
        let margin = (right_height-sum-arrows)/(count+1);
  
        let activeI = slideRef.current.children.length;
        
        if(index != null){
          activeI = index;
          if(!activeRange.from){
            setActiveRange({'from':document.getElementsByClassName('floorChoose').length - count,'to':document.getElementsByClassName('floorChoose').length-1})
            return false;
          }else{
            if(activeI >= activeRange.from && activeI <= activeRange.to){
              return false
            }else{
              if(dir =='prev'){
                setActiveRange({'from':activeI-4,'to':activeI})    
                activeI +=1;
              }else{
                setActiveRange({'from':activeI,'to':activeI+4})        
                activeI +=4
              }
            }
          }
        }
        
        setHeightSum({'right':right_height,'sum':(item_height+margin) * count,'margin':margin,'trans':(count - activeI)*(item_height+margin)});
       }

    return <><div className="chooseForm" style={{height:heights.right}}>
    <div className="floorList" style={{height:heights.sum}} ><div className="fortrans" style={{'transform':`translateY(${heights.trans}px)`}} ref={slideRef}>
{props.floors && props.floors.map((floor,i)=>{
      return <div key={floor.id}  className={
        activeIndex != -1 && i == activeIndex || activeIndex ==-1 && i == props.floors.length -1 ? "floorChoose active" : "floorChoose"
      }  style={{'margin-top':heights.margin}} onClick={(e)=>{clickedFloor(i,floor.info.slug)}} >
        <div className="title">
          <h1>{floor.info.title} {t('floor')}</h1>
          <span>{t('choose_floor_1_click')}</span>
        </div>
        <div className="floorBullet">
          <span className="floorBullet"></span>
        </div>
      </div>
    } )}
    </div>
  </div>

  <ul className="slideArrows" style={{'margin-top':heights.margin}} >
    <li className="leftArrow" onClick={prevSlide}><span></span></li>
    <li className="rightArrow" onClick={nextSlide}><span></span></li>
  </ul>
</div>

<div className={props.floor ? "floorMobile floorActive" : "floorMobile"}>
  <p>{t('choose_floor_1_click')}</p>
  <Slider {...settings} >
                {props.floors && props.floors.slice(0).reverse().map((floor,i)=>{
                  return <div className={
                    activeIndex != -1 && i == activeIndex || activeIndex == -1 && i==0 ? "chooseFloorMobile active" : "chooseFloorMobile"
                  } key={i} onClick={(e)=>{clickedFloorReverse(i,floor.info.slug)}}   >
                      <span>{floor.info.title} {t('floor')}</span>
                  </div>
                })}
  </Slider>
</div>
</>
}