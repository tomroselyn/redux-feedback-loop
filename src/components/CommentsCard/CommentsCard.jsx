import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import { TextField, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';

class CommentsCard extends Component {

    state = {
        comment: ''
    }
    
    handleInput = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', name: 'comments', payload: this.state.comment })
        this.props.history.push('/review');
    }

    render() {

        let isValid;
        if (this.state.comment) {
            isValid = true;
        } else {
            isValid = false;
        }

        return (
            <div>
                <Card className="inputCard">
                    <CardContent>
                        <Typography component="h2" variant="h5" gutterBottom>
                            Any comments you want to leave?
                        </Typography>
                        <TextField
                            multiline
                            label="Comments?"
                            value={this.state.comment}
                            onChange={this.handleInput}
                            margin="normal"
                            variant="outlined"
                            helperText="this is the helper text"
                        >
                        </TextField>
                    </CardContent>
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
                <Review />
            </div>
        )

        // return (
        //     <div>
        //         <h2>Any comments you want to leave?</h2>
        //         <label>Comments</label>
        //         <input onChange={this.handleInput} type="text" />
        //         <button onClick={this.handleNext}>NEXT</button>
        //         <Review />
        //     </div>
        // )
    }
}

export default connect()(CommentsCard);