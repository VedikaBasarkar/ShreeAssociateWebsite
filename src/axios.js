import axios from 'axios'

export default axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    baseURL: 'http://103.59.104.41:8000/api'
})