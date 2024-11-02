import { Link } from 'react-router-dom'
import Modal from '../companents/Modal'
import classes from './NewPost.module.css'
import { useNavigate ,Form ,redirect} from 'react-router-dom'

function NewPost() {
    const navigate=useNavigate()
    function closeNavigateHandler(){
      navigate("..")
    }

  return (
    <Modal>
    <Form className={classes.form} method='post'>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name='body' required rows={3}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name='author' required/>
      </p>
      <p className={classes.actions}>
        <Link to=".." type='button' onClick={closeNavigateHandler}>Cancel</Link>
        <button >Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;


export async function action({request}){
  const formData=await request.formData()
  const postData=Object.fromEntries(formData)
  fetch("http://localhost:8080/posts",{
    method:"POST",
    body:JSON.stringify(postData),
    headers:{
        "Content-Type":"application/json"
    }
 }
 )
 return redirect("..")
}