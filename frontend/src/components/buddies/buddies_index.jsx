import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer';  
import BuddiesIndexItem from './buddies_index_item';

class BuddiesIndex extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            currentUserId: this.props.session.currentUser,
            numBuddies: null,
            babbleBuddies: [] 
        };
        this.renderBuddiesItems = this.renderBuddiesItems.bind(this);
    }

    componentDidMount() {
        let currentUser = this.props.fetchUser(this.currentUserId);
        // let friendIds = currentUser.babbleBuddies;
        let friendIds = [1, 2, 3]; 
        // created array for sample usage above
        let friends = [];
        friendIds.forEach(id => { 
            this.props.fetchUser(id)
                .then(user => {
                    friends.push(user);
                });
            }
        );  

        this.setState({numBuddies: friendIds.length, babbleBuddies: friends});
        
    }

    renderBuddiesItems () {
        if (this.state.numBuddies === 0) {
            return (<div>You have no buddies</div>)
        } else {
            let users = this.state.babbleBuddies.map(user => (
                <BuddiesIndexItem key={user._id} user={user} />
            ))
            return users; 
        }
    }

    render () {
        return ( 
            <>
                <div className="chat-users-page">
                    <h2 className="chat-users-number">
                        <span className="chat-users-digit-default">
                            {this.state.numBuddies}
                        </span>
                        <span style={{ fontWeight: 'bold' }}> BabbleBuddies</span> 
                    </h2>  
                    <ul>
                        { this.renderBuddiesItems() }
                    </ul>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(BuddiesIndex);