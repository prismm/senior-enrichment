import ViewCampus from '../components/ViewCampus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        selectedCampus: state.campuses.selected
    };
};

const ViewCampusContainer = connect(mapStateToProps)(ViewCampus);

export default ViewCampusContainer;