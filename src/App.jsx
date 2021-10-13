import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Posts from './pages/Posts.jsx'
import Post from './pages/Post.jsx'
import PostsNew from './pages/PostsNew.jsx'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts/new">
            <PostsNew />
          </Route>
          <Route exact path="/posts/:postId">
            <Post />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
