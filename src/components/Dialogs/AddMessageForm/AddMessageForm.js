import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../common/FormsControl/FormsControls";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
