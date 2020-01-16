import profileReducer, {
  addPostActionCreator,
  deletePost
} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi how are you ?", likesCount: 12 },

    { id: 2, message: "Thanks, fine", likesCount: 2 }
  ]
};

it("length of posts should be incremented", () => {
  //1.test data
  let action = addPostActionCreator("it-com");

  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  //1.test data
  let action = addPostActionCreator("it-com");

  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.posts[2].message).toBe("it-com");
});
it("after deleting length of messages should be decrement", () => {
  //1.test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation

  // expect(newState.posts.length).toBe(2);
});
