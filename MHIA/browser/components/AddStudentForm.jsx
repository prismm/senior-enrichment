import React from 'react';

export default function AddStudentForm (props) {
    const campuses = props.campuses;
    return (
        <div>
            <h3 className="ourStudentsHeader"> Enroll a New Student </h3>
            <table>
                <tbody>
                    <tr> 
                        <form>
                            <td><input type="text" placeholder="Name?" className="studentNameInput" /></td>
                            <td><input type="text" placeholder="Email?" className="studentEmailInput" /></td>
                            {/*<td><input type="text" placeholder="Campus?" className="studentEmailInput" /></td>*/}
                            <td>
                                <select className="selectCampus">
                                   {campuses && campuses.map(campus => (
                                       <option value={campus.id}>{campus.name}</option>
                                     ))
                                   }
                                </select>
                            </td>
                            <td>
                                <button type="submit">Add Student</button> 
                            </td>
                        </form>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}