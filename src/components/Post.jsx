import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      {/* <div> */}
      {/* <PostList author={props.author} title={props.title} /> */}
      {/* </div> */}
      <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}> {props.title}</p>
      </li>
    </>
  );
};

export default Post;
