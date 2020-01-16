import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormsControl/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p, key) => (
      <Post message={p.message} likeCount={p.likeCount} key={key} />
    ));

  let onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postBlock}>
      <div className={classes.text}>
        <h2>My Posts</h2>
      </div>
      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

let AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.area}>
        <Field
          name="newPostText"
          component={TextArea}
          validate={[required, maxLength10]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button className={classes.addDesc}>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNEwPostForm" })(
  AddNewPostForm
);

export default MyPosts;
