import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeelingsCard extends Component {
    render() {
        return (
            <p>Feelings Card!!!</p>
        )
    }
}

export default connect()(FeelingsCard);