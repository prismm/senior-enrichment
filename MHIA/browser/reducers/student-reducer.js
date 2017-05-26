import { RECEIVE_STUDENTS, RECEIVE_STUDENT, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../constants';

const initialStudentState = {
    selected: {},
    list: []
};

export default function(state = initialStudentState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STUDENTS:
            newState.list = action.students;
            break;

        case RECEIVE_STUDENT:
            newState.selected = action.student;
            break;

        case ADD_STUDENT:
            return newState.list.concat([action.student]);

        case DELETE_STUDENT:
            return newState.list.filter(student => student.id !== action.student.id);

        case UPDATE_STUDENT:
            return newState.list.filter(student => (
                action.student.id === student.id ? action.student : student
            ));

        default:
            return state;
    }

    return newState;
}