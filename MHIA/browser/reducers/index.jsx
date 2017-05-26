import { combineReducers } from 'redux';
import campusReducer from './campus-reducer';
import studentReducer from './student-reducer';

const rootReducer = combineReducers({
    campuses: campusReducer,
    students: studentReducer
})

export default rootReducer;