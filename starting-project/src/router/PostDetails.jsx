import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../companents/Modal';
import classes from './PostDetails.module.css';

//function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
//}

export default PostDetails;

export async function loader({ params }) {
  const { postId } = params; // postId parametresini al

  try {
    const response = await fetch(`http://localhost:8080/posts/${postId}`);
    
    // API yanıtını kontrol et
    if (!response.ok) {
      throw new Error('Failed to fetch post data');
    }
    
    const resData = await response.json();
    
    // Eğer posts mevcutsa döndür, yoksa null döndür
    return resData.posts || null; 
  } catch (error) {
    console.error('Error in loader:', error);
    throw new Response('Error fetching post data', { status: 500 });
  }
}
