import Students from '../components/Students';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log("state on container", state);
    return {
        students: state.students.list,
        campuses: state.campuses.list
    };
};

// const mapDispatchToProps =

const StudentsContainer = connect(mapStateToProps)(Students);

export default StudentsContainer;