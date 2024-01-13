import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getSubredditPosts } from "../../../api/reddit"

//slices - store is made up of multiple slices that come together to
//represent your global state

//actions - tell redux what it should do with your state
//actions have two properties:  type (name of the action) and payload (optional - any data you want to send to redux in your action
//so that the action can perform its job)

//reducers - take an action and, depending on the action type (and the payload, if provided), will make the update in the Redux store
//NB: reducers never directly make an update to the redux store - reducers take the state, make a copy of the state and make changes
//to the copy of the state, which will also have all the other unchanged properties of the state, and then will completely replace the
//state as a whole with the copy that has the changes applied

export const loadRedditPosts = createAsyncThunk(
    //unlike the reducers below which receive "reddit"
    //at the beginning of them automatically 
    //(e.g. "reddit/addPosts") is the action, we have to add
    //"reddit" to the beginning of async thunks so that it reads
    //as below: "reddit/loadRedditPosts"
    "reddit/loadRedditPosts",
    () => {
        try {
            const { posts } = await getSubredditPosts.get()
            return posts;
        }   catch (error) {
            return error.response.posts
        }
    }
) 

const initialState = {
    //the object contains an empty post array
    //and then fetches a list of posts from the server
    //status tracks the loading state for a loadRedditPosts
    //request
    posts: [],
    isLoading: false,
    error: false,
    message: "",
    searchTerm: "",
    getSubreddits: "/r/pics"
}
const redditSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {
        addPosts(state, action) {
            state.posts = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loadRedditPosts.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(loadRedditPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            //Add any fetched posts to the array
            state.posts.concat(action.payload)
        })
        .addCase(loadRedditPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.message = action.payload
        })
            
    }
});
//reusable selector functions mean that we don't have to keep
//rewriting selector logic in each component - we just need
//to change the selector in this slice file to update the 
//imported selectors in the components
//starts off as an empty array
export const selectPosts = state => state.reddit

//because we're using createSlice, we automatically get access to a reducer
export default redditSlice.reducer
export const { addPosts } = redditSlice.actions

