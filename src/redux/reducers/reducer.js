import {combineReducers} from 'redux';


const user = (state= {}, action) => {
    switch(action.type){
        case 'set_user':
            return action.payload;
        default:
            return state;
    }
}

const group = (state={}, action) => {
    switch(action.type){
        case'set_group':
        return action.payload;
        default: return state
    }
}

export default combineReducers({user, group});