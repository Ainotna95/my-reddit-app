import React from "react"
import { useSelector } from "react-redux"
import { selectPosts } from "../post/postsSlice"

//check code works
export default function Header() {
    const posts = useSelector(selectPosts)
  return (
    <>
        <header>
            <input 
            type="text" 
            name="title" 
            placeholder="What're you thinking about?"
            value={posts.title}
            />
        </header>
    </>
    )
    
}