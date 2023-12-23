import Row from 'react-bootstrap/Row';


export default function TextBlock({title,description,text}){

    return (<Row className="textPage">
    <div className="flexRight col-3">
        {title && <div className="fixedLeft">{title}</div>}    
    </div>
    <div className='col-9'>
        {description && <h1>{description}</h1>}
        {text && <div className="textContent" dangerouslySetInnerHTML={{__html: text}} />}    
    </div>
    </Row>)
}