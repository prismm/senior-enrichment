import React from 'react';
import { Link } from 'react-router';

export default function ViewStudent(props) {
    const selectedStudent = props.selectedStudent;
    return (
        <div>
            {selectedStudent.campus && <h2>STUDENT: {selectedStudent.name}</h2>}
            <ul>
                <li>email: {selectedStudent.email}</li>
                {selectedStudent.campus && 
                <li>campus: <Link to={`/campus/${selectedStudent.campus.id}`}>{ selectedStudent.campus.name } </Link></li>
                }
            </ul>
        </div>
    )
}