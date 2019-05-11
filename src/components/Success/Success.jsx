import React, {Component} from 'react';

class Success extends Component {

    handleClick = () => {
        console.log('resetting form');
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

export default Success;