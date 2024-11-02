
import { Outlet } from "react-router-dom";
import PostsList from "../companents/PostsList";


function Post() {
  return(
    <>
    <Outlet/>
     <main>
    <PostsList/>
    </main>
  </>
  );
}

export default Post;

export async function loader() 
{
  const response = await fetch("http://localhost:8080/posts")
  const resData = await response.json()
  return resData.posts
}
