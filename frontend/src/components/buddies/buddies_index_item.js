import React from 'react';
import languages from '../languages/languages'



class BuddiesIndexItem extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }; 

    render () { 
        return (

            <div className="chat-users-item" >

                <div className="chat-users-name">
                    <img height="55px"
                        src={this.state.user.pic}
                        className="chat-users-profile-image" />
                    {this.state.user.handle}
                </div>
                <div className="chat-users-right">
                    <div className="chat-users-language-pref">
                        <div className="chat-users-learning">
                            Learning 
                            <div className="chat-users-tags">
                                {languages[this.state.user.to_learn]}
                            </div>
                        </div>
                        <div className="chat-users-speaking">Speaks 
                            <div className="chat-users-tags">
                                {languages[this.state.user.to_share]}
                            </div>
                        </div>
                    </div>

                    <button className="chat-users-start-convo-button">Talk To Me</button>
                </div>
            </div> 
        )
    }
}

export default BuddiesIndexItem;