import React, { useState, useEffect } from 'react';
// import getAllPosts from '../../APIv1/get/allPosts';
import {HomeComponent} from '../../components/'

// function PostContent(props) {
//     console.log(props.testing)
//     return <h1>Hello, {props.name}</h1>;
// }

export function LandingPage(props) {
    // const [ posts, setPosts ] = useState([])

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await getAllPosts();
    //         //console.log(request)
    //         setPosts(request)
    //         return request
    //     }
    //     fetchData()

    // }, [] )
    
    // console.log(posts)

    // return (<HomeComponent posts={posts}/>)

   // console.log("hyelo")
    //const data = await getAllPosts()
  //  console.log(data)
    return "loading"
/*    const [token, setToken] = useState('');

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (!token) {
            getToken();
        }
    }, []);

    const getToken = async () => {
        const data = await getAllPosts();
        setToken(data);
    };

    console.log(token)

    return (<HomeComponent posts={token}/>)
    */

}   