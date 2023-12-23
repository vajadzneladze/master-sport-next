import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function RightInfo({floor,faq_page, flat, floorExpand,setConditionPage,setCalculatorPage,forMobile}){
    const { t } = useTranslation('common')
    const { locale } = useRouter();
   
    return <div className={
        (floorExpand) ? "floorInfo active "+forMobile : "floorInfo "+forMobile
        }>
        <ul>
            {floor && floor.project && <li><a href="#" onClick={(e)=>{e.preventDefault();}}>{t('xelmisawvdomia')} <span>{floor.flats.length}/{floor.flats.filter(item=>item.status == 1).length}</span></a></li>}
            <li><a href="#" onClick={(e)=>{e.preventDefault();setConditionPage(true)}}>{t('chabarebis_kondicia')} <span></span></a></li>
        {faq_page && faq_page.info && <li><Link href={'/'+locale+'/'+faq_page.info.slug}>{t('kitxva_pasuxi')} <span></span></Link></li>}
            
            {flat && <li><Link href="#" onClick={(e)=>{e.preventDefault();setCalculatorPage(true)}}>{t('price_calculator')} <span></span></Link></li>}
        </ul>
    </div>
}