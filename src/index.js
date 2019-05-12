import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//initial state - all properties empty strings
let initialFeedbackState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

//feedbackReducer sets each property in state (object) based on action.name
const feedbackReducer = (state = initialFeedbackState, action) => {
    switch(action.type) {
        case 'SET_FEEDBACK':
            return {
                ...state,
                [action.name]: action.payload
            }
        case 'CLEAR_FEEDBACK':
            return initialFeedbackState;
        default:
            return state;
    }
};

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
