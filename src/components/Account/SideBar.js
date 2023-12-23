import Link from 'next/link'

const SideBar = ({ current = '' }) => {

    const logOutHandler = (e) => {

        e.preventDefault();


        alert('log out ...')
    }
   
    return (
        <div className="col-12 col-md-3 order-2 order-md-1 left">
            <h1 className="d-none d-md-block">Your account</h1>

            <ul className="categories">
                <li className={`cart  ${current === 'order' ? 'active' : ' '}`}>
                    <Link href="/account/order"> Orders and returns </Link>
                </li>
                <li className={`profile  ${current === 'personal' ? 'active' : ' '}`}>
                    <Link href="/account/personal"> Personal Date </Link>
                </li>
                <li className={`address  ${current === 'address' ? 'active' : ' '}`}>
                    <Link href="/account/address"> Addresses </Link>
                </li>
                <li className="logout">
                    <Link href="" onClick = {logOutHandler}> Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
