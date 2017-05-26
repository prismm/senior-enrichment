import React from 'react';
import Students from '../components/Students';

export default function ViewCampus(props) {
    const selectedCampus = props.selectedCampus;
    const campusStudents = props.campusStudents;
    console.log("props on ViewCampus", props);
    return (
        <div className="selectedCampus">
            <img src={ selectedCampus.imageLink } width="400" height="400" />
            <h2 className="selectedCampusName">CAMPUS: {selectedCampus.name}</h2>
            <Students students={campusStudents} selectedCampus={selectedCampus} />
        </div>
    )
}