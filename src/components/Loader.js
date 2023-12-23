import Image from 'next/image'
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

const Loader = ({text}) => {
    const [scaleOut, setScaleOut] = useState(true);
    
    useEffect(() =>{
        setScaleOut(false)
    },[]);
      

    return (
        <CSSTransition
        timeout={1000}        
        in={scaleOut}
        classNames="scaleOut"
        >
        <div className="preLoader" >  
          <Image
                src='/loader.png'
                alt="Preloader"
                width="178"
                height="83"
                />
            
            
            <h3>{text}</h3>      
        </div>
        </CSSTransition>
    )
}

export default Loader;