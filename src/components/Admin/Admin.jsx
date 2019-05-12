import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';


class Admin extends Component {

    state = {
        feedbackData: []
    }

    componentDidMount() {
        this.getFeedbackData();
    }

    getFeedbackData = () => {
        axios.get('/feedback')
        .then(response => {
            this.setState({
                feedbackData: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleDelete = (id) => {
        axios.delete('/feedback/' + id)
        .then(response => {
            this.getFeedbackData();
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleReturn = () => {
        this.props.history.push('/');
    }

    render() {

        // console.log(this.state.feedbackData)

        return (
            <div>
                <Card className="inputCard">
                    <CardContent>
                        <Typography component="h2" variant="h5" gutterBottom>
                            Feedback Received
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Feeling</TableCell>
                                    <TableCell align="center">Understanding</TableCell>
                                    <TableCell align="center">Support</TableCell>
                                    <TableCell align="center">Comments</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
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

export default connect()(Admin);