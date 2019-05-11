import React, {Component} from 'react';
import {connect} from 'react-redux';

class Success extends Component {

    handleClick = () => {
        console.log('resetting form');
        this.props.dispatch({type: 'CLEAR_FEEDBACK'})
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Thank You!</p>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
            
        )
    }
}

export default connect()(Success);