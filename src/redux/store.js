import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    profilePage: {},

    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sideBarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
