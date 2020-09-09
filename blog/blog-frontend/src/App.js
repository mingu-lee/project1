import React from 'react';
import {Route} from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return(
    <>
    <Route component={PostListPage} path="/" exact />
    <Route component={PostListPage} path="/@:username" exact />
    <Route component={LoginPage} path="/login" />
    <Route component={PostPage} path="/@:username/:postId" />
    <Route component={RegisterPage} path="/register" />
    <Route component={WritePage} path="/write" />
    </>
  );
};

export default App;
