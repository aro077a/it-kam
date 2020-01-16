import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";
import classes from "./Dialogs.module.css";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = props => {
  console.log("TCL: props", props);
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messageElements = state.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));
  // let newMessageBody = state.newMessagesBody;

  let addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
        <div className={classes.messages}>
          <div>{messageElements}</div>
        </div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
