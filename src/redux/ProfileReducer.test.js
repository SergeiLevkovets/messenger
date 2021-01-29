import profileReducer, {addPost, deletePost} from "./ProfileReducer";

// 1. Test data
let state = {
    posts: [
        {id: 1, message: 'Hi. how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post in this messenger', likesCount: 100}
    ]
};

test('Length of post should be incremented', () => {
    let addAction = addPost("Test message");

    // 2. action
    let newState = profileReducer(state, addAction);

    // 3. Expectation
    expect(newState.posts.length).toBe(3)
});

test('Message of new post should be correct', () => {
    let addAction = addPost("Test message");

    // 2. action
    let newState = profileReducer(state, addAction);

    // 3. Expectation
    expect(newState.posts[2].message).toBe("Test message")
});

test('After deleting message length should be decrement', () => {

    let deleteAction = deletePost(1);

    // 2. action
    let newState = profileReducer(state, deleteAction);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);

});