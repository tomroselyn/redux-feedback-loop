import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

let initialFeedbackState = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

const feedbackReducer = (state = initialFeedbackState, action) => {
    switch(action.type) {
        case 'SET_FEELING':
            return {
                ...state,
                feeling: action.payload
            }
        case 'SET_UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            }
        case 'SET_SUPPORT':
            return {
                ...state,
                support: action.payload
            }
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'CLEAR_FEEDBACK':
            return initialFeedbackState;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
