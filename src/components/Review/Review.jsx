import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Review extends Component {

    handleSubmit = () => {
        //package data
        let objectToSend = {
            feeling: this.props.feedback.feeling,
            understanding: this.props.feedback.understanding,
            support: this.props.feedback.support,
            comments: this.props.feedback.comments
        }

        console.log('objectToSend', objectToSend);
        //send data to server for storage
        axios.post('/feedback', objectToSend)
        .then(response => {
            console.log('feedback submitted')
            //navigate to success page
            this.props.history.push('/success');
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {

        let submitButton;

        if (
            this.props.feedback.feeling > 0
            && this.props.feedback.feeling <= 5
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
                <p>Feelings: {this.props.feedback.feeling}</p>
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