import axios from 'axios'
import config from '../../../config.json'
const URL = `${config.APIv1}/get/allPosts`

async function getAllPosts() {
    const headers = {
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };

    const allPosts = await axios.get(URL, { headers })
    return allPosts.data
}

export default getAllPosts