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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };

    default:
      return state;
  }
};

export const sendMessageCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});
export default dialogsReducer;
