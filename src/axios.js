import axios from 'axios'

export default axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'apikey':'QMDHJJcFqXBSeb5zDn'
    },
    baseURL: 'https://formail-api.ortigan.com/api'
})