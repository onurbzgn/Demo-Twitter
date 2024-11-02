import classes from "./Postslist.module.css"
import Posts from "./Posts"
import { useLoaderData } from "react-router-dom";

function PostsList() {
    const posts=useLoaderData()
    return (
        <>
            { posts.length > 0 &&
                <ul className={classes.posts}>
                    {posts.map((posts) => <Posts key={posts.id} id={posts.id} author={posts.author} body={posts.body} />)}
                </ul>}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "red" }}>
                    <h2>There are not post yet.</h2>
                    <p>Start adding some!</p>
                </div>

            )}
        </>
    )

}
export default PostsList