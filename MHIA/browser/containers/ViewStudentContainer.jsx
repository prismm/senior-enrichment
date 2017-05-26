import ViewStudent from '../components/ViewStudent';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        selectedStudent: state.students.selected
    };
};

const ViewStudentContainer = connect(mapStateToProps)(ViewStudent);

export default ViewStudentContainer;