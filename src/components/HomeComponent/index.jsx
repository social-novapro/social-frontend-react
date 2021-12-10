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
                {posts.included.map( (post) => (
                    <div>
                        <h1>{post.content}</h1>
                    </div>
                ))}
            </div>
        )
    } 
}