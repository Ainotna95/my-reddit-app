import './App.css';
import Posts from "./app/features/post/Posts"
import Header from "./app/features/header/Header"
import { useDispatch, useSelector } from "react-redux"
import { addPost, removePost} from "./app/features/post/postsSlice"

/*store.dispatch({type: "posts/addPost", payload: {title: "Hello mate"}})
console.log("Current state is: ", store.getState())
store.dispatch({type: "posts/addPost", payload: {title: "Howdy"}})
store.dispatch({type: "posts/removePost", payload: 1})
console.log("Current state is: ", store.getState())*/

function App() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  console.log(posts)//prints the initial state
  return (
    <div className="App">
      <nav><h1>Reddit Minimal</h1></nav>
      <div className="post-border">
        <h2>{posts.title}</h2>
        {/*WORK OUT HOW TO DISPATCH AN ACTION WITH TITLE PAYLOAD*/}
        <button onClick={() => dispatch({addPost})}>Add Post</button>
        <button onClick={() => dispatch({removePost})}>Remove Post</button>
      <Header/>
      <Posts/>
      </div>
    </div>
  );
}

export default App;
