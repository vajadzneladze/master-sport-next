import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react';
import Slider from "nouislider";
import 'nouislider/dist/nouislider.css';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios'
import { useRouter } from "next/router";

export default function Condition({floor,block,flat,installment_price,living_area,summer_area,endMonth,full_installment,total_payment,first_tax,setCalculatorPage}){
    const { t } = useTranslation('common')
    const { locale } = useRouter();

    const [fadeIn, setFadeIn] = useState(false);
    const [download, setDownload] = useState(false);
    const [generate, setGenerate] = useState(false);
    const [first, setFirst] = useState(0);
    const [monthly, setMonthly] = useState(0);
    useEffect(() =>{
        setFadeIn(true);
        document.body.classList.add('grayBg')
        document.body.classList.add('headerBg')
        return () => {
          document.body.classList.remove('grayBg')
          document.body.classList.remove('headerBg')
        }
      },[]);

      useEffect(() => {
        Slider.create(document.getElementById("sliderRegular"), {
          start: [0],
          connect: [true, false],
          step: 1,
          range: { min: 0, max: full_installment },
        }).on('update', function (values, handle) {
                setFirst(values[handle]);
                document.getElementById('percentVal').innerHTML = (values[handle] * 100 / full_installment).toFixed(1);                
            });  
            
            Slider.create(document.getElementById("sliderRegular2"), {
                start: [0],
                connect: [true, false],
                step: 1,
                range: { min: 0, max: full_installment },
              }).on('update', function (values, handle) {
                setMonthly(values[handle]);   
                document.getElementById('percentVal2').innerHTML = (values[handle] * 100 / full_installment).toFixed(1);        
                  });  
      }, []);


      function exit(e){
        e.preventDefault();
        setFadeIn(false);
        const timer = setTimeout(() => {
            setCalculatorPage(false)
          }, 500);        
      }

      function generatePdf(e){
        e.preventDefault();
        let formData = new FormData();    
        formData.append('first_payment',first); 
        formData.append('monthly',monthly);
        formData.append('endMonth',endMonth);
        formData.append('installment_price',full_installment);
        formData.append('block',block);
        formData.append('floor',floor);
        formData.append('flat',flat.info.title);
        formData.append('kvm_price',installment_price);
        formData.append('flat_area',living_area);
        formData.append('summer_area',summer_area);
		
		let post_url = process.env.NEXT_PUBLIC_BACKEND_URL.replace('http://','https://');

        Axios.post(post_url+'/'+locale+'/download_pdf',formData,{responseType: 'blob'}).then(res => {
          if(res){
            
			let blob = new Blob([res.data], {
              type: 'application/pdf'
            });
            let url = window.URL.createObjectURL(blob)
			
			//window.location.href = url;
            //window.open(url,'_blank');
			//let a = document.createElement('a')
			//document.body.appendChild(a)
			//a.style = 'display: none'
			//a.target = '_BLANK'
			//a.href = url;
			document.getElementsByClassName('download')[0].href=url;
			//a.click()

		  }
        }).catch(error => {
          const reader = new FileReader();
          let blob = new Blob([error.response.data], {
            type: 'application/json'
          });
          reader.addEventListener("load", e => {
            let res = JSON.parse(reader.result);
            console.log(res);              
          });
          reader.readAsText(blob)
        });
      }

    return <div  className={
        (fadeIn) ? "calculatorPage active" : "calculatorPage "
      }>
            <Container>
                <Row>
                  
                    <Col md={6}>
                       <a href="#" className="back" onClick={(e)=>{exit(e)}}><span></span> {t('binaze_dabruneba')}</a>

                       <p className='heading'>{t('winaswari_shenatani')}</p>
                       <p className="first">
                        <input className="calcInput" id="first_tax" onChange={(e) => { setFirst(e.target.value); /*document.getElementById("sliderRegular").noUiSlider.set([e.target.value, null]);*/}} value={first}></input><span className='gelPosition'>{t('gel')}</span> <span className='percent'>(<span id="percentVal">{(first *100 / full_installment).toFixed(1)}</span>%)</span></p>
                       <div className="slider input-slider--" id="sliderRegular"></div>
                       <span className="min">{first_tax.toFixed(2)} {t('gel')}</span><span className="max">{full_installment.toFixed(2)} {t('gel')}</span>

                       <p className='heading'>{t('yoveltviuri_gadasaxadi')}</p>
                      

                       <p className="first">
                        <input className="calcInput" id="monthly" onChange={(e) => setMonthly(e.target.value)} value={monthly}></input><span className='gelPosition'>{t('gel')}</span> <span className='percent'>(<span id="percentVal2">{(monthly *100 / full_installment).toFixed(1)}</span>%)</span></p>
                       <div className="slider input-slider--" id="sliderRegular2"></div>
                       <span className="min2">{first_tax.toFixed(2)} {t('gel')}</span><span className="max2">{full_installment.toFixed(2)} {t('gel')}</span>

                       <button className='calc' onClick={(e)=>{setDownload(true); generatePdf(e);}}>{t('tanxis_gamotvla')}</button>

                       <p className="loanMonth">{t('ganvadeba')} <span>{endMonth}</span> {t('tve')}</p>
            
                    </Col>
                    <Col md={6} className='secondCol'>
                 
                 <h2>{t('mtliani_gadasaxadi')}</h2>
                 <p>{t('ertiani_shenatani')}</p>
                 <h3>{total_payment.toFixed(2)} {t('gel')}</h3>
                 <p>{t('ganvadeba')}</p>
                 <h3>{full_installment.toFixed(2)} {t('gel')}</h3>
              <Row className="fets">
                  <div className='col-4'>
                    <span>{t('kvm_fasi')}</span>
                    <p>{installment_price.toFixed(2)} {t('gel')}</p>
                  </div> 
                  <div className='col-4'>
                    <span>{t('binis_kvm')}</span>
                    <p>{living_area}</p>
                  </div>
                  <div className='col-4'>
                    <span>{t('aivnis_kvm')}</span> 
                    <p>{summer_area}</p>
                  </div>  
              </Row>  

              {download && <Row className="downloadPdf">
                  <Col lg={6}  className="col-12 ">
                    <p>{t('chamotvirte_pdf_text')}</p>
                  </Col>
                  <Col lg={6} className="col-12 minCenter">
                    <a href="#" target="_BLANK" className="download" >{generate &&<Spinner animation="border" size="sm" />}{!generate &&<span></span>}{t('chamotvirte_pdf')}</a>
                  </Col>
              </Row>}
                    </Col>
                </Row>
            </Container>
        </div>
}