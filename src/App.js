import './App.css';
import Post from "./app/features/post/Post"
import Header from "./app/features/header/Header"
import {API_ROOT} from "./api/reddit"

function App() {
  return (
    <>
      <Header/>
      <Post/>
    </>
  );
}

export default App;
