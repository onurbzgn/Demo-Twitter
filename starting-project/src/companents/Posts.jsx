import { Link } from "react-router-dom";
import classes from "./Post.module.css"


function Posts(props) {
    return(
        <li className={classes.post}>
            <Link to={props.id}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
            </Link>
        </li>
    );
}

export default Posts;