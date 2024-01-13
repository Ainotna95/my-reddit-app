import { configureStore } from "@reduxjs/toolkit"
import redditReducer from "./features/post/redditSlice"

//useDispatch dispatches an action inside a component
//useSelector selects a piece of state from the store
//and displays it inside a component

//store = global state

export const store = configureStore({
    //the reducers below show that we will have a state.users, state.posts
    //and state.comments section in our Redux state object
    //the relevant reducers will be in charge of updating their relevant slices
    
    reducer: {
        //here, we've connected the redditSlice to our store
        //which is then going to be accessible to our entire app
        //using the <Provider> in index.js
        reddit: redditReducer,
    }
})