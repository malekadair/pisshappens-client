import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';

import HomePage from "./routes/HomePage/HomePage"
import ComicsListPage from "./routes/ComicsListPage/ComicsListPage"
import ComicPage from './routes/ComicPage/ComicPage';

// import PrivateRoute from "../src/Utils/PrivateRoute"
// import PublicOnlyRoute from "../src/Utils/PublicOnlyRoute";

const App = () => {
  // const [title, setTitle] = useState('blah')
  const [comics, setComics] = useState({});
  console.log('pre:', comics)
  useEffect(() => {
    const fetchComics = async () => {
      const response = await axios(
        'http://localhost:8000/api/comics',
      );

      setComics(response.data);
    }
    console.log('post', comics)
    fetchComics()
  }, []);

  return (
    <div className='App'>
      <h1>PissHappens</h1>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <PublicOnlyRoute path='/login' component={LoginPage} /> */}
        {/* <PublicOnlyRoute path='/register' component={RegisterPage} /> */}
        <Route exact path='/comics' component={ComicsListPage} />
        <Route path='/comics/:comicId' component={ComicPage} />
      </Switch>
    </div>
  )
}

export default App;
