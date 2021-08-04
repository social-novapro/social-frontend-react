import React from "react";
import { useQuery } from "@apollo/client";
import { postPage } from '../../components/index';
import getAllPosts from '../../APIv1/get/allPosts'

export function LandingPage(props) {
    //const { loading, error, data } = useQuery(menuPageQuery)
    const allPosts = getAllPosts()
   
    
    async function testing() {
        const allPosts = await getAllPosts()
        return allPosts
    }

    return (
        <div>
            {allPosts.map(function(post) {
                   console.log(post)
                   return `<h1>${post.content}</h1>`
            }).join(" ")}
        </div>
    );
}   