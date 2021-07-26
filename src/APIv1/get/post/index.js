import axios from 'axios'

const URL = 'http://localhost:5002/v1/get/post/'

async function getPostData(postID) {
    const headers = {
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
    const postInfo = await axios.get(URL + postID, { headers })
    const res = await axios.get(URL + postID, { data: { product: "Hello" } })  
    console.log(postInfo.data)
}

export default getPostData