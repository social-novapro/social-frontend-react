import React from "react";
import { useQuery } from "@apollo/client";
import { postPage } from '../../components/index';
import getAllPosts from '../../APIv1/get/allPosts'

function PostContent(props) {
    console.log(props.testing)
    return <h1>Hello, {props.name}</h1>;
}

export function LandingPage(props) {
    //const { loading, error, data } = useQuery(menuPageQuery)
    const allPosts = getAllPosts()
   
    
    async function testing() {
        const allPosts = await getAllPosts()
        return allPosts
    }
    return (
        <div>
            <PostContent 
                getPosts={testing}
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