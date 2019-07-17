import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer';  

class BuddiesIndex extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            currentUserId: this.props.session.currentUser,
            babbleBuddies: {}
        };
    }

    componentDidMount() {
        let currentUser = this.props.fetchUser(this.currentUserId);
        // let friendIds = currentUser.babbleBuddies;
        let friendIds = [1, 2, 3]; 
        // created array for sample usage
        let friends = [];
        friendIds.forEach(id => { 
            this.props.fetchUser(id)
                .then(user => {
                    friends.push(user);
                });
            }
        );

        let friendsHash = {};
        friends.forEach(friend  => {
            friendsHash[friend.id] = {friend};
        }); 

        this.setState({babbleBuddies: friendsHash});
        
    }

    render () {
        return (
        <div>Friends Index </div>
        )
    }
}

export default BuddiesIndex;