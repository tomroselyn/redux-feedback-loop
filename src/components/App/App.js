import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

//routes
import FeelingsCard from '../FeelingsCard/FeelingsCard';
import UnderstandingCard from '../UnderstandingCard/UnderstandingCard';
import SupportCard from '../SupportCard/SupportCard';
import CommentsCard from '../CommentsCard/CommentsCard';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path="/" component={FeelingsCard}/>
          <Route path="/understanding" component={UnderstandingCard} />
          <Route path="/support" component={SupportCard} />
          <Route path="/comments" component={CommentsCard} />
          <Route path="/success" component={Success} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
