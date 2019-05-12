import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {Button, Card, CardContent, CardActions, Typography} from '@material-ui/core';

class Review extends Component {

    handleReset = () => {
        //navigate to start of form when RESET button is clicked
        this.props.history.push('/');
    }

    handleSubmit = () => {
        //send data to server for storage
        axios.post('/feedback', this.props.feedback)
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

        //declare submitButton before conditionally rendering
        let submitButton;

        //check for valid data in all reducer fields
        if (
            this.props.feedback.feeling
            && this.props.feedback.understanding
            && this.props.feedback.support
            && this.props.feedback.comments
        ) {
            //clickable button
            submitButton = 
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={this.handleSubmit}
                >SUBMIT</Button>
        } else {
            //disabled button if data is missing/invalid
            submitButton = 
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    disabled
                >SUBMIT</Button>
        }

        return (
            <div>
                {/* card container */}
                <Card className="reviewCard">
                    <CardContent>
                        {/* card title */}
                        <Typography component="h2" variant="h5" gutterBottom>
                            Review Your Feedback
                        </Typography>
                        {/* each property value stored in the reducer */}
                        <Typography component="p" variant="body2">
                            Feeling: {this.props.feedback.feeling}
                        </Typography>
                        <Typography component="p" variant="body2">
                            Understanding: {this.props.feedback.understanding}
                        </Typography>
                        <Typography component="p" variant="body2">
                            Support: {this.props.feedback.support}
                        </Typography>
                        <Typography component="p" variant="body2">
                            Comments: {this.props.feedback.comments}
                        </Typography>
                    </CardContent>
                    {/* button area - bottom of card */}
                    <CardActions className="cardActions">
                        {/* reset button */}
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={this.handleReset}>
                        Reset</Button>
                        {/* submit button */}
                        {submitButton}
                    </CardActions>
                </Card>
            </div>
        )
    }
}

//map redux state so current stored values can be shown on DOM and posted to server
const mapRedux = (reduxState) => {
    return {feedback: reduxState.feedbackReducer}
}

//withRouter used to fix history push error
export default withRouter(connect(mapRedux)(Review));