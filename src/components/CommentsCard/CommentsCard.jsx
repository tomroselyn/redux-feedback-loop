import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import { TextField, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';

class CommentsCard extends Component {

    //state value for storing comment until NEXT is clicked
    state = {
        comment: ''
    }
    
    //when input value is changed, save the text in local state
    handleInput = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    //when NEXT button clicked, send comment to reducer and navigate to /review
    handleNext = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', name: 'comments', payload: this.state.comment })
        this.props.history.push('/review');
    }

    render() {

        //check for content in state (will allow NEXT button to be clicked)
        let isValid;
        if (this.state.comment) {
            isValid = true;
        } else {
            isValid = false;
        }

        return (
            <div>
                {/* card container */}
                <Card className="inputCard">
                    <CardContent>
                        {/* question */}
                        <Typography component="h2" variant="h5" gutterBottom>
                            Any comments you want to leave?
                        </Typography>
                        {/* multiline text input */}
                        <TextField
                            multiline
                            className="commentField"
                            label="Comments?"
                            value={this.state.comment}
                            onChange={this.handleInput}
                            margin="normal"
                            variant="outlined"
                        >
                        </TextField>
                    </CardContent>
                    {/* button area - bottom of card */}
                    <CardActions className="cardActions">
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            disabled={!isValid}
                            onClick={this.handleNext}
                        >NEXT</Button>
                    </CardActions>
                </Card>
                {/* review component */}
                <Review />
            </div>
        )
    }
}

//connect to allow dispatch
export default connect()(CommentsCard);