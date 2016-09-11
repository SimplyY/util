import { handleActions } from 'redux-actions'

import * as action from './action'

const defaultState = {
}

const contacts = handleActions({
    [action.test]: function(state, action) {
        return Object.assign({}, state, {

        })
    },

}, defaultState)

export default contacts
