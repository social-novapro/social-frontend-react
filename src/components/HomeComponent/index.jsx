export function HomeComponent({
    posts,
}) {
    console.log(posts)
    console.log("hello")
    if(!posts) {
        return (
            "no posts found"
        )
    }
    else {
        return (
            <div>
                {posts.map( (post) => (
                    <div class="publicPost">
                        <h2>{post.userData ? post.userData.displayName : "unknown"}</h2>
                        <h2>@{post.userData ? post.userData.username : "unknown user"}</h2>
                    <p>{ post.postData.content}</p>
                    <p class="debug">${post._id} - from (${post.userID})</p>
                    <button class="buttonStyled" onclick="blankFunction('like')">like</button> | <button class="buttonStyled" onclick="blankFunction('repost')">repost</button> | <button class="buttonStyled" onclick="blankFunction('reply')">reply</button>
                    </div>
                ))}
            </div>
        )
    } 
}