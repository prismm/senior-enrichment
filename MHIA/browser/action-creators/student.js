import { RECEIVE_STUDENTS, RECEIVE_STUDENT, UPDATE_STUDENT, ADD_STUDENT, DELETE_STUDENT } from '../constants';
import axios from 'axios';
import { hashHistory } from 'react-router';

//ACTION CREATORS ------------------------------------

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const receiveStudent = student => ({
    type: RECEIVE_STUDENT,
    student
});

export const create = student => ({
    type: ADD_STUDENT,
    student
});

export const update = student => ({
    type: UPDATE_STUDENT,
    student
});

export const remove = student => ({
    type: DELETE_STUDENT,
    student
});



//DISPATCHERS ---------------------------------------

export const addStudent = newStudent => {

    return (dispatch) => {
        return axios.post(`/api/student/`, { email: newStudent.email, name: newStudent.name, campusId: newStudent.campusId })
            .then(res => dispatch(create(res.data)))
            .then((student) => {
                hashHistory.push(`/student/${student.id}`)
            })
            .catch(err => console.error(err));
    };
};

export const deleteStudent = student => {
    return (dispatch) => {
        return axios.delete(`/api/student/${student.id}`)
            .then(res => dispatch(remove(res.data)))
            .catch(err => console.error(err));
    };
};

export const updateStudent = student => {
    return (dispatch) => {
        return axios.put(`/api/student/${student.id}`, { email: updateStudent.email, name: updateStudent.name, campusId: updateStudent.campusId })
            .then(res => dispatch(update(res.data)))
            .then(() => {
                hashHistory.push(`/student/${student.id}`)
            })
            .catch(err => console.error(err));
    };
};

export const getStudentById = studentId => {
    return dispatch => {
        axios.get(`/api/student/${studentId}`)
            .then(student => {
                dispatch(receiveStudent(student.data));
            })
            .catch(err => console.error(err));
    };
};