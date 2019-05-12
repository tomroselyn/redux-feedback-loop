import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';

class Success extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Card className="inputCard">
                    <CardContent>
                        <Typography component="h2" variant="h5" gutterBottom>
                            Thank you for your feedback!
                        </Typography>
                        <img src="https://media.giphy.com/media/3oEhn4RWLE4xLGq1IA/giphy.gif" alt="thank you gif" />
                    </CardContent>
                    <CardActions className="cardActions">
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={this.handleClick}
                        >Leave More Feedback</Button>
                    </CardActions>
                </Card>
            </div>
            
        )
    }
}

export default connect()(Success);