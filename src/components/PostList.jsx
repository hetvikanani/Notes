import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = (props) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiCallFun = async () => {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:8080/posts");
      setPostData(data.posts);
      setIsLoading(false);
    };

    apiCallFun();
  }, []);

  const allData = (title, author) => {
    axios.post("http://localhost:8080/posts", {});

    setPostData([...postData, { body: title, author: author }]);
  };

  return (
    <>
      {props.isPosting && (
        <Modal>
          <NewPost cancel={props.onStopPosting} data={allData} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {!isLoading &&
          postData.length > 0 &&
          postData.map((ele) => (
            <Post key={Math.random()} author={ele.author} title={ele.body} />
          ))}

        {!isLoading && postData.length === 0 && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no post.</h2>
            <p>Start adding some!</p>
          </div>
        )}
        {isLoading && (
          <div style={{ textAlign: "center", color: "white" }}>
            <p>Loading Posts...</p>
          </div>
        )}
      </ul>
    </>
  );
};

export default PostList;
