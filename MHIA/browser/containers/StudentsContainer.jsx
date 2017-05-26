import Students from '../components/Students';
import { connect } from 'react-redux';
import { deleteStudent } from '../action-creators/student';

const mapStateToProps = (state) => {
    return {
        students: state.students.list,
        campuses: state.campuses.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStudent: function(student){
            dispatch(deleteStudent(student));
        }
    }
}

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default StudentsContainer;