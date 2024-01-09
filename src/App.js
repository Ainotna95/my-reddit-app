import './App.css';
import Posts from "./app/features/post/Posts"
import Header from "./app/features/header/Header"

function App() {
  return (
    <div>
      <nav><h1>Reddit Minimal</h1></nav>
      <div className="post-border">
      <Header/>
      <Posts/>
      </div>
    </div>
  );
}

export default App;
