import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportCard extends Component {
    render() {
        return (
            <p>Support Card!!!</p>
        )
    }
}

export default connect()(SupportCard);