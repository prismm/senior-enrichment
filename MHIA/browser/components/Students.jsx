import React from 'react';
import { Link } from 'react-router';
import AddStudentContainer from '../containers/AddStudentContainer'

export default function Students(props) {
    const students = props.students;
    const campuses = props.campuses;
    const deleteStudent = props.deleteStudent;
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
                    students && students.length ? students.map(student => (
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
                                <Link className="deleteLink btn" onClick={deleteStudent(student)}>X</Link>
                            </td>
                        </tr>
                    ))
                    : <small>[...no students at this campus] </small>
                    }
                </tbody>
            </table>
            <AddStudentContainer campuses={campuses} />
        </div>
    )
}