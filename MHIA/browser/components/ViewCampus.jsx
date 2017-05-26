import React from 'react';
import Students from '../components/Students';
// import StudentsContainer from '../containers/StudentsContainer'

export default function ViewCampus(props) {
    const selectedCampus = props.selectedCampus;
    const campusStudents = props.campusStudents;

    return (
        <div className="selectedCampus">
            <img src={ selectedCampus.imageLink } width="400" height="400" />
            <h2 className="selectedCampusName">CAMPUS: {selectedCampus.name}</h2>
            <Students students={campusStudents} selectedCampus={selectedCampus} campuses = {[selectedCampus]} />
        </div>
    )
}