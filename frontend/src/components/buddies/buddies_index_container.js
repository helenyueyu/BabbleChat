import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import BuddiesIndex from './buddies_index';


const mapStateToProps = (state) => ({
    session: state.session,
    users: state.entities.users
});

const mapDispatchToProps = () => dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(BuddiesIndex);