import React, {Component} from 'react';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';

class Success extends Component {

    handleClick = () => {
        //navigate to start of form when button is clicked
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {/* card container */}
                <Card className="inputCard">
                    <CardContent>
                        {/* page title */}
                        <Typography component="h2" variant="h5" gutterBottom>
                            Thank you for your feedback!
                        </Typography>
                        {/* gif image */}
                        <img src="https://media.giphy.com/media/3oEhn4RWLE4xLGq1IA/giphy.gif" alt="thank you gif" />
                    </CardContent>
                    {/* button area - bottom of card */}
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

export default Success;