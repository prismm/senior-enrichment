import { combineReducers } from 'redux';
import campusReducer from './campus-reducer';
import studentReducer from './student-reducer';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//     switch (action.type) {
//         default: return state
//     }
// };

const rootReducer = combineReducers({
    campuses: campusReducer,
    students: studentReducer
})

export default rootReducer;