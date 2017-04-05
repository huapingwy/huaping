import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import MainComponent from './jsx/index.jsx';
import HotMovieDetailComponent from './jsx/hot-detail.jsx';




//ReactDOM.render(<MainComponent />, document.querySelector('#home-page'));

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
      <Route path="/detail" component={HotMovieDetailComponent} />
    </Route>
  </Router>
), document.querySelector('#home-page'));