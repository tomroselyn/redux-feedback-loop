import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingCard extends Component {
    render() {
        return (
            <p>Understanding Card!!!</p>
        )
    }
}

export default connect()(UnderstandingCard);