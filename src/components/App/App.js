import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

//routes
import FeelingCard from '../FeelingCard/FeelingCard';
import UnderstandingCard from '../UnderstandingCard/UnderstandingCard';
import SupportCard from '../SupportCard/SupportCard';
import CommentsCard from '../CommentsCard/CommentsCard';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Link to="/admin">
              <img className="adminIcon" src="images/table-large.png" alt="admin-icon" />
            </Link>
            <h1 className="App-title">daily feedback</h1>
            <h4 className="App-intro">(don't forget it!)</h4>
          </header>
          <Route exact path="/" component={FeelingCard}/>
          <Route path="/understanding" component={UnderstandingCard} />
          <Route path="/support" component={SupportCard} />
          <Route path="/comments" component={CommentsCard} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Success} />
          <Route path="/admin" component={Admin} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
