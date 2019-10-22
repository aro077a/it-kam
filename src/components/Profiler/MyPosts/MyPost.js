import React from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postBlock}>
      <div className={classes.text}>
        <h2>My Posts</h2>
      </div>
      <div>
        <div className={classes.area}>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button className={classes.addDesc} onClick={onAddPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
