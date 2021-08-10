import { useState, useEffect } from 'react';
import getAllPosts from '../../APIv1/get/allPosts';
import getPostData from '../../APIv1/get/post';

function PostContent(props) {
    console.log(props.testing)
    return <h1>Hello, {props.name}</h1>;
}

export function LandingPage(props) {
    const [token, setToken] = useState();

    useEffect(() => {
        if (!token) {
            getToken();
        }
    }, []);

    async function getToken() {
        const response = await getAllPosts()
        console.log(response)
        setToken(response);
    };
   //return <h1>e</h1>

    console.log(token)
    // return <h1>e</h1>


    var postData = [];

    for (var i = 0; i < token.length; i++){
        postData.push(
            <div>
                <h3>{token[i].content}</h3>
            </div>
        );

    }

    return(<div>{postData}</div>);
    

    return (
        <div>
            {token.map(function(post) {
                console.log(post.content)
                return (
                    <h1>{post.content}</h1>
                )
            }).join(" ")}
        </div>  
    );//*/


    return (
        <div>
            <PostContent 
                name="daniel"/>
            <PostContent 
                name="tester"/>
            <PostContent 
                name="admin"/>
        </div>
    )
   /* return (
        <div>
            {allPosts.map(function(post) {
                   console.log(post)
                   return `<h1>${post.content}</h1>`
            }).join(" ")}
        </div>
    );*/
}   