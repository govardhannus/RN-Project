import {combineReducers} from 'redux';
import taskReducer from './index';


const allReducers = combineReducers({
    taskReducer
})

export default allReducers;