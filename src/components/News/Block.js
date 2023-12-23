import Link from 'next/link'

export default function news({url,src,date,title,description}) {
    return (<Link href={url}>
        <img src={src} />
        <span className="date">{date}</span>
        <p className="title" >{title}</p>
        <p className="description">{description}</p>
    </Link>)
}