import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./features/post/postsSlice"

export default configureStore({
    //the reducers below show that we will have a state.users, state.posts
    //and state.comments section in our Redux state object
    //the relevant reducers will be in charge of updating their relevant slices
    
    reducer: {
        users: usersReducer,
        posts: postReducer,
        comments: commentsReducer
    }
})