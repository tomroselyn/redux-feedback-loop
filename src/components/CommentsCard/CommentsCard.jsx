import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsCard extends Component {
    render() {
        return (
            <p>Comments Card!!!</p>
        )
    }
}

export default connect()(CommentsCard);