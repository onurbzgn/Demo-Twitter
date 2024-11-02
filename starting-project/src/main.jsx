import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import NewPost, { action as newpostAction } from './router/NewPost';
import RootLayaout from './router/RootLayout';
import Post, { loader as postLoader } from './router/Post';
import PostDetails ,{loader as postDetailsLoader} from './router/postDetails';





const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayaout />,
    children: [
      {
        path: "/", element: <Post />,
        loader: postLoader,
        children: [
          { path: "/new-post", element: <NewPost />, action: newpostAction },
          //{path:"/:postId", element : <PostDetails/>, loader:postDetailsLoader }
        ]
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
