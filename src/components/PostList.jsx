import React, { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = (props) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  //   const hideModalHandler = () => {
  //     setModalVisible(false);
  //   };

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            titleChange={titleChangeHandler}
            authorChange={authorChangeHandler}
            cancel={props.onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={author} title={title} />
      </ul>

      {/* <ul>
        <li>
          {props.author}
          {props.title}
        </li>
      </ul> */}
    </>
  );
};

export default PostList;
