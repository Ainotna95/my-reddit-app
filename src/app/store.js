import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./features/post/postsSlice"

//useDispatch dispatches an action inside a component
//useSelector selects a piece of state from the store
//and displays it inside a component

//ADD USERSLICE AND COMMENTSLICE

export const store = configureStore({
    //the reducers below show that we will have a state.users, state.posts
    //and state.comments section in our Redux state object
    //the relevant reducers will be in charge of updating their relevant slices
    
    reducer: {
        posts: postReducer,
    }
})