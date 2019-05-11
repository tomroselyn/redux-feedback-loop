import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class UnderstandingCard extends Component {
    
    handleInput = (event) => {
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value })
    }

    handleNext = () => {
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding? (1 - 5)</label>
                <input onChange={this.handleInput} type="number" />
                <button onClick={this.handleNext}>NEXT</button>
                <Review />
            </div>
        )
    }
}

export default connect()(UnderstandingCard);