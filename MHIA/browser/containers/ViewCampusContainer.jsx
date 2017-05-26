import ViewCampus from '../components/ViewCampus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log('selectedCampuses in container', state.campuses.selected)
    return {
        selectedCampus: state.campuses.selected,
        campuses: state.campuses.list,
        campusStudents: state.campuses.campusStudents
    };
};

const ViewCampusContainer = connect(mapStateToProps)(ViewCampus);

export default ViewCampusContainer;