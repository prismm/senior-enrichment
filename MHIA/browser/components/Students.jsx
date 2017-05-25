import React from 'react';

export default function Students(props) {
    const students = props.students;

    return (
        <div>
            <h3>PLACEHOLDER FOR Students</h3>
            <table>
                {
                students && students.map(student => (
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                    </tr>
                ))
                }
            </table>
        </div>
    )
}