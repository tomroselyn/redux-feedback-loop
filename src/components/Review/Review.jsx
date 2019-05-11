import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Review extends Component {

    handleSubmit = () => {
        console.log('form submitted, or did it???')
        this.props.history.push('/success');
    }

    render() {

        let submitButton;

        if (
            this.props.feedback.feelings > 0
            && this.props.feedback.feelings <= 5
            && this.props.feedback.understanding > 0
            && this.props.feedback.understanding <= 5
            && this.props.feedback.support > 0
            && this.props.feedback.support <= 5
            && this.props.feedback.comments !== ''
        ) {
            submitButton = <button onClick={this.handleSubmit}>SUBMIT</button>
        } else {
            submitButton = <button disabled>INCOMPLETE</button>
        }

        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.feedback.feelings}</p>
                <p>Understanding: {this.props.feedback.understanding}</p>
                <p>Support: {this.props.feedback.support}</p>
                <p>Comments: {this.props.feedback.comments}</p>
                {submitButton}
            </div>
        )
    }
}

const mapRedux = (reduxState) => {
    return {feedback: reduxState.feedbackReducer}
}

export default withRouter(connect(mapRedux)(Review));