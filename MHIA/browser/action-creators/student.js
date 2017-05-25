import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../constants';
import axios from 'axios';

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const receiveStudent = student => ({
    type: RECEIVE_STUDENT,
    student
});

export const getStudentById = studentId => {
    return dispatch => {
        axios.get(`/api/student/${studentId}`)
            .then(student => {
                dispatch(receiveStudent(student.data));
            });
    };
};