import { createSlice, createAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

const initialState = {
    id: uuidv4(), 
    img: "https://source.unsplash.com/random/300x200", 
    title: "Random stuff!",
    status: "idle"
}

    //add a postLoading action to the reducer
export const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        },
        removePost: (state, action) => {
            state.filter(id => id !== action.payload)
        },
        //ADD LOADPOSTS CODE
        loadPosts: (state, action) => {
        }
    }
})

export const createPost = createAction("post/addPost");
export const deletePost = createAction("post/removePost");

export const selectPosts = state => state.posts

export default postsSlice.reducer
export const { addPost, removePost} = postsSlice.actions