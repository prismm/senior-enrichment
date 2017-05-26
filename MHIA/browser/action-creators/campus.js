import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, RECEIVE_CAMPUS_STUDENTS } from '../constants';
import axios from 'axios';

export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveCampus = campus => ({
    type: RECEIVE_CAMPUS,
    campus
});

export const receiveCampusStudents = campusStudents => ({
    type: RECEIVE_CAMPUS_STUDENTS,
    campusStudents
});

export const getCampusById = campusId => {
    return dispatch => {
        axios.get(`/api/campus/${campusId}`)
            .then(campus => {
                // console.log("testing action creator", campus.data[0], campus.data[1])
                dispatch(receiveCampus(campus.data[0]));
                dispatch(receiveCampusStudents(campus.data[1]))
            });
    };
};