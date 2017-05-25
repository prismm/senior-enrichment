import React from 'react';

export default function ViewStudent(props) {
    const selectedStudent = props.student;

    return (
        <div>
            <h3>PLACEHOLDER FOR ViewStudent</h3>
            <h3>${selectedStudent.name}</h3>
        </div>
    )
}