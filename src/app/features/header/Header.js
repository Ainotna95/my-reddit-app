import React from "react"

//add useSelector to make code work?
export default function Header() {

  return (
    <>
        <header>
            <input 
            type="text" 
            name="title" 
            placeholder="What're you thinking about?"
            value={title}
            />
        </header>
    </> 
    )
    
}