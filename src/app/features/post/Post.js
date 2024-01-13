import {React, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addPosts, selectPosts } from "./redditSlice"
import { loadRedditPosts } from "./redditSlice"

export default function Post () {
    //useSelector: connecting the Post component to state
    //so that the component can dispatch some actions
    const posts = useSelector(selectPosts)
    //then we need to connect to dispatch so that we can
    //dispatch actions to our Redux store
    //We need these hooks (useDispatch and useSelector)
    //to connect React to Redux
    const dispatch = useDispatch();
    //UseEffect tells React that your component needs to
    //do something after render
    useEffect(() => {
        dispatch(loadRedditPosts());
    })
   return (
    <>
    <h2>{posts.posts}</h2>
    <div>{posts.getSubreddits}</div>
    <button onClick={() => dispatch(addPosts("howdy"))}>Add post</button>
    </>
    )
}