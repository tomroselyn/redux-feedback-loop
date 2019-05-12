import React, {Component} from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';


class Admin extends Component {

    //state stores all feedback data locally after the GET request is complete
    state = {
        feedbackData: []
    }

    //on mount, GET data from server
    componentDidMount() {
        this.getFeedbackData();
    }

    getFeedbackData = () => {
        //request data from /feedback server route
        axios.get('/feedback')
        .then(response => {
            //set local state to data received from server request
            this.setState({
                feedbackData: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleDelete = (id) => {
        //request item deleted at /feedback/id server route
        axios.delete('/feedback/' + id)
        .then(response => {
            //get data after it has been updated
            this.getFeedbackData();
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleReturn = () => {
        //navigate to start of survey
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                {/* card container */}
                <Card className="inputCard">
                    <CardContent>
                        {/* title of table */}
                        <Typography component="h2" variant="h5" gutterBottom>
                            Feedback Received
                        </Typography>
                        {/* results table */}
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {/* column headings */}
                                    <TableCell align="center">Feeling</TableCell>
                                    <TableCell align="center">Understanding</TableCell>
                                    <TableCell align="center">Support</TableCell>
                                    <TableCell align="center">Comments</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* map local state feedback data to create each table row */}
                                {this.state.feedbackData.map((entry) => {
                                    return <TableRow key={entry.id}>
                                        <TableCell align="center">{entry.feeling}</TableCell>
                                        <TableCell align="center">{entry.understanding}</TableCell>
                                        <TableCell align="center">{entry.support}</TableCell>
                                        <TableCell align="center">{entry.comments}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={() => this.handleDelete(entry.id)}
                                            >DELETE</Button>
                                        </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                    {/* button area - bottom of card */}
                    <CardActions className="cardActions">
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={this.handleReturn}
                        >Return To Feedback Form</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Admin;