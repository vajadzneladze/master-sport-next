import Link from 'next/link'

const Partner = ({ url = ' ', img = '' }) => {
    return (
        <div>
            <Link href={url} target="_blank">
                <img src={img} alt="" />
            </Link>
        </div>
    )
}

export default Partner
