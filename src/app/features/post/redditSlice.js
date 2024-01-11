import { createSlice } from "@reduxjs/toolkit"

    //add a postLoading action to the reducer
export const postsSlice = createSlice({
    name: "post",
    initialState: [],
    reducers: {
        addPost(state, action) {
            state.push(action.payload)
        },
        removePost (state, action) {
            state.filter(post => post.id !== action.payload)
        },
        //ADD LOADPOSTS CODE
        loadPosts: (state, action) => {
        }
    }
})

export const selectPosts = state => state.posts

export default postsSlice.reducer
//export const { addPost, removePost} = postsSlice.actions