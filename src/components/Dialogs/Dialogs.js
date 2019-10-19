import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElements = props.state.messages.map(m => (
    <Message message={m.message} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
        <div className={classes.messages}>{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
