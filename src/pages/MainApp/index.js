// Libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { Footer, Header } from '../../components';
// Pages
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
// Style
import './mainApp.scss';


function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog/:id?">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp