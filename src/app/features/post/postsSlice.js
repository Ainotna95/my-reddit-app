import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

const initialState = {
    id: uuidv4(), 
    img: "https://source.unsplash.com/random/300x200", 
    title: ""}

export const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        },
        removePost: (state, action) => {
            state.filter(id => id !== action.payload.id)
        }
    }
})

export default postsSlice.reducer