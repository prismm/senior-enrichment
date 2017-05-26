import React, { Component } from 'react';
import AddStudentForm from '../components/AddStudentForm';
import { addStudent } from '../action-creators/student';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        addNewStudent(newStudent){
            dispatch(addStudent(newStudent));
        }
    };
};

// const mapStateToProps = (state, ownProps) => {
//     return {
//         // campuses: state.campuses
//     }
// }

class AddStudentContainer extends Component {
    
    constructor(props) {
        // console.log(props);
        super(props);
        this.state = {
            name: '',
            email: '',
            campusId: 1
        }
        console.log(this.state.campusId)
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCampusSelect = this.handleCampusSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(evt) {
        const email = evt.target.value;
        this.setState({
            email: email
        })
        // console.log("EMAIL CHANGE", evt.target.value)
    }

    handleNameChange(evt) {
        const name = evt.target.value;
        this.setState({
            name: name
        })
        // console.log("NAME CHANGE", evt.target.value)
    }

    handleCampusSelect(evt) {
        const campusId = evt.target.value;
        console.log(campusId);
        this.setState({
            campusId: campusId
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        console.log("STATE UPON SUBMIT", this.state)
        if (!this.state.name || !this.state.email){
            alert("You must enter a name and email to enroll a new student -- Thanks!");
            return
        }
        this.props.addNewStudent(this.state);
    }

    render(){
        const inputs = this.state;
        return (
        <AddStudentForm
            campuses={this.props.campuses}
            handleNameChange={this.handleNameChange}
            handleEmailChange={this.handleEmailChange}
            handleCampusSelect={this.handleCampusSelect}
            handleSubmit={this.handleSubmit}
            inputs={inputs}
        />
        )
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddStudentContainer);
