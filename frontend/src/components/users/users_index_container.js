
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { edit } from '../../actions/session_actions'; 
import UsersIndex from './users_index';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users.all,
    currentUser: state.session.user,
    // users: Object.values(state.entities.users.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    edit: (user) => dispatch(edit(user)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);