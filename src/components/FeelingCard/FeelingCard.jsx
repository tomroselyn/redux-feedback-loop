import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';
import {MenuItem, TextField, Button, Card, CardContent, CardActions, Typography} from '@material-ui/core';

class FeelingsCard extends Component {

    //state values for rating and whether or not valid number has been selected
    state = {
        rating: 0,
        valid: false
    }
    
    //on mount, clear current feedback stored in reducer
    componentDidMount = () => {
        this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
    }

    //when NEXT button clicked, send rating to reducer and navigate to /understanding
    handleNext = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', name: 'feeling', payload: this.state.rating })
        this.props.history.push('/understanding');
    }

    //when value is selected from dropdown, save it in local state
    handleSelect = (event) => {
        this.setState({
            rating: event.target.value,
            valid: true
        })
    }
    
    render() {

        console.log('feeling rating:', this.state.rating);

        return (
            <div>
                {/* card container */}
                <Card className="inputCard">
                    <CardContent>
                        {/* question */}
                        <Typography component="h2" variant="h5" gutterBottom>
                            How are you feeling today?
                        </Typography>
                        {/* input dropdown */}
                        <TextField
                            select
                            className="inputField"
                            label="Feelings? (1 - 5)"
                            value={this.state.rating}
                            onChange={this.handleSelect}
                            margin="normal"
                            variant="outlined"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </TextField>
                    </CardContent>
                    {/* button area - bottom of card */}
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
                {/* review component */}
                <Review />
            </div>
        )
    }
}

//connect to allow dispatch
export default connect()(FeelingsCard);