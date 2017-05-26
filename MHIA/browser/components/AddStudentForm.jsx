import React from 'react';


export default function AddStudentForm (props) {
    const campuses = props.campuses;

    const handleEmailChange = props.handleEmailChange;
    const handleNameChange = props.handleNameChange;
    const handleCampusSelect = props.handleCampusSelect;
    const handleSubmit = props.handleSubmit;

    return (
        <div>
            <h3 className="ourStudentsHeader"> Enroll a New Student </h3>
            {/*<table>
                <tbody>
                    <tr> */}
                        <form>
                            <td><input type="text" placeholder="Name?" className="studentNameInput" onChange={handleNameChange} /></td>
                            <td><input type="text" placeholder="Email?" className="studentEmailInput" onChange={handleEmailChange} /></td>
                            {/*<td><input type="text" placeholder="Campus?" className="studentEmailInput" /></td>*/}
                            <td>
                                {/*I COULDNT GET THE SELECT TO WORK AS INTENDED ON THE SINGLE CAMPUS VIEW -- ONCHANGE IS NOT REGISTERING!*/}
                                <select className="selectCampus" onChange={handleCampusSelect}>
                                   {campuses && campuses.map(campus => (
                                       <option key={campus.id} value={campus.id}>{campus.name}</option>
                                     ))
                                   }
                                </select>
                            </td>
                            <td>
                                <button type="submit" onClick={handleSubmit}>Add Student</button> 
                            </td>
                        </form>
                    {/*</tr>
                </tbody>
            </table>*/}
        </div>
    )
}