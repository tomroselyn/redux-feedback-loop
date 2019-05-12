import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import { MenuItem, TextField, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';

class SupportCard extends Component {

    state = {
        rating: 0,
        valid: false
    }

    handleNext = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', name: 'support', payload: this.state.rating })
        this.props.history.push('/comments');
    }

    handleSelect = (event) => {
        this.setState({
            rating: event.target.value,
            valid: true
        })
    }

    render() {
        
        console.log('rating:', this.state.rating);

        return (
            <div>
                <Card className="inputCard">
                    <CardContent>
                        <Typography component="h2" variant="h5" gutterBottom>
                            How well are you being supported?
                        </Typography>
                        <TextField
                            select
                            label="Support? (1 - 5)"
                            value={this.state.rating}
                            onChange={this.handleSelect}
                            margin="normal"
                            variant="outlined"
                            helperText="this is the helper text"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </TextField>
                    </CardContent>
                    <CardActions className="cardActions">
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            disabled={!this.state.valid}
                            onClick={this.handleNext}
                        >NEXT</Button>
                    </CardActions>
                </Card>
                <Review />
            </div>
        )
    }
}

export default connect()(SupportCard);