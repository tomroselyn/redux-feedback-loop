import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

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

    render() {

        // console.log(this.state.feedbackData)

        let eachTableRow = this.state.feedbackData.map((entry, i) => {
            return <tr key={i}>
                <td>{entry.feeling}</td>
                <td>{entry.understanding}</td>
                <td>{entry.support}</td>
                <td>{entry.comments}</td>
                <td><button>DELETE</button></td>
            </tr>
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eachTableRow}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect()(Admin);