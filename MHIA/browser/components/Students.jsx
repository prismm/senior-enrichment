import React from 'react';
import { Link } from 'react-router';
import AddStudentForm from './AddStudentForm'

export default function Students(props) {
    const students = props.students;
    const campuses = props.campuses;
    return (
        <div>
            <h3 className="ourStudentsHeader">Our Students</h3>
            <table>
                <tbody>
                    <tr className="columnHeaders">
                        <td>Student Name</td>
                        <td>Student Email</td>
                        <td>Campus</td>
                        {/*<td>Remove Student?</td>*/}
                    </tr>
                    {
                    students.length ? students.map(student => (
                        <tr key={ student.id }>
                            <td>
                                <Link to={`/student/${student.id}`}>{ student.name }</Link>
                            </td>
                            <td>{student.email}</td>
                            <td>
                                {student.campus ? <Link to={`/campus/${student.campusId}`}>{ student.campus.name } </Link>
                                    : <Link to={`/campus/${student.campusId}`}>{ props.selectedCampus.name } </Link>}
                            </td>
                            <td>
                                <Link className="deleteLink btn">X</Link>
                            </td>
                        </tr>
                    ))
                    : <small>[...no students at this campus] </small>
                    }
                </tbody>
            </table>
            <AddStudentForm campuses={campuses} />
        </div>
    )
}