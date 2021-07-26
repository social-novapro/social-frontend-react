import axios from 'axios'

const URL = 'http://localhost:5002/v1/auth/'

async function getRequestAuth(user) {
    const data = await axios.get(URL + encodeURI(user), {
        user
    })
    console.log(data.data)
}

export default getRequestAuth