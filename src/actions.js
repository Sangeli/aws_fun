import { createAction } from 'redux-actions'







export const setSubscribeError = createAction('SET_SUBSCRIBE_ERROR')
export const clearSubscribeError = createAction('CLEAR_SUBSCRIBE_ERROR')
export const setTopicSuccess = createAction('SET_TOPIC_SUCCESS')
export const setSubscribeSuccess = createAction('SET_SUBSCRIBE_SUCCESS', data => {
    const { SubscriptionArn } = data
    if (SubscriptionArn === 'pending confirmation') return 'pending'
    return 'empty'

})
export const setMessageSucess = createAction('SET_MESSAGE_SUCCESS')
export const setTopicFailure = createAction('SET_TOPIC_FAILURE')
export const loadTopicList = createAction('LOAD_TOPIC_LIST')