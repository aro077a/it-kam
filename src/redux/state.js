const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi how are you ?", likesCount: 12 },

        { id: 2, message: "Thanks, fine", likesCount: 2 }
      ],
      newPostText: "it-kamasutra.com"
    },

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
    }
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({
  type: "ADD_POST"
});

export const updateNewPostTextActionCreator = text => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text
});

export default store;
