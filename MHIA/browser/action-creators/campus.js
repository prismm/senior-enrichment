import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../constants';
import axios from 'axios';

export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveCampus = campus => ({
    type: RECEIVE_CAMPUS,
    campus
});

export const getCampusById = campusId => {
    return dispatch => {
        axios.get(`/api/campus/${campusId}`)
            .then(campus => {
                dispatch(receiveCampus(campus.data));
            });
    };
};