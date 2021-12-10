import React from 'react'

export function postPage({
    postdata,
    authorData
}) { 
    return (
        <div>
            <h1>@{authorData.username} | {authorData.dispalyname}</h1>  
            <p>{postdata.content}</p>
            <p>{postdata.comments.length}</p>              
        </div>
    )
}
