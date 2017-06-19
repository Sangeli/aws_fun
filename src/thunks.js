import Immutable from 'immutable';
import Promise from 'bluebird';
import { routerMiddleware, push } from 'react-router-redux'

import * as api from './api';


export const sendMessage = () => {
    return (dispatch, getState) => {
        const state = getState();
        api.sendMessage(state).then(response => {
            console.log('sendMessage response: ', response.data);
        })
    }
}


export const changePage = nextPage => {
    return (dispatch, getState) => {
        console.log('nextPage', nextPage)
        dispatch(push('/' + nextPage))
    }
}

export const subscribe = () => {
    return (dispatch, getState) => {
        const state = getState();
        console.log('subscribe', state.toJS())
        api.subscribe(state).then(response => {
            console.log('subscribe response: ', response.data);
        })
    }
}

export const topic = () => {
    return (dispatch, getState) => {
        const state = getState();
        console.log('topic', state.toJS())
        api.topic(state).then(response => {
            console.log('topic response: ', response.data);
        })
    }
}