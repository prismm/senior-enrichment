import React from 'react';

export default function Students(props) {
    const students = props.students;
    console.log("students", students)
    console.log("props", props)
    return (
        <div>
            <h3>Our Students</h3>
            <table>
                <tbody>
                    <tr className="columnHeaders">
                        <td>Student Name</td>
                        <td>Student Email</td>
                        <td>Student Campus</td>
                    </tr>
                    {
                    students && students.map(student => (
                        <tr key={ student.id }>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.campusId}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}