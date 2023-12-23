import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
		'Authorization':'Bearer 1|Axso29brfF84mXhP7pzr37rQHhnQu3SBhN4OMFXP'
    }
})
export default axios;