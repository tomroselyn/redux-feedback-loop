import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class CommentsCard extends Component {
    
    handleInput = (event) => {
        this.props.dispatch({ type: 'SET_COMMENTS', payload: event.target.value })
    }

    handleNext = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <label>Comments</label>
                <input onChange={this.handleInput} type="text" />
                <button onClick={this.handleNext}>NEXT</button>
                <Review />
            </div>
        )
    }
}

export default connect()(CommentsCard);