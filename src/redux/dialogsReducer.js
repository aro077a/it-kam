const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    {
      id: 1,
      message: "Hi"
    },
    {
      id: 2,
      message: "Hi"
    },
    {
      id: 3,
      message: "Hi"
    },
    {
      id: 4,
      message: "Hi"
    },
    {
      id: 5,
      message: "Hi"
    }
  ],
  dialogs: [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jimmy"
    },
    {
      id: 3,
      name: "Joanna"
    },
    {
      id: 4,
      name: "Tina"
    },
    {
      id: 5,
      name: "Michael"
    }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: "SEND_MESSAGE"
});

export const updateNewMessageBodyCreator = body => ({
  type: "UPDATE_NEW_MESSAGE_BODY",
  body: body
});
export default dialogsReducer;
