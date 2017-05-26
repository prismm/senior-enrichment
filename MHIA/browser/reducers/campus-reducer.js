import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, RECEIVE_CAMPUS_STUDENTS } from '../constants';

const initialCampusState = {
    selected: {},
    list: [],
    campusStudents: []
};

export default function(state = initialCampusState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CAMPUSES:
            newState.list = action.campuses;
            break;

        case RECEIVE_CAMPUS:
            newState.selected = action.campus;
            break;

        case RECEIVE_CAMPUS_STUDENTS:
            newState.campusStudents = action.campusStudents;
            break;

        default:
            return state;
    }

    return newState;
}