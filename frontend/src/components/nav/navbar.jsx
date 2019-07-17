
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import '../../index.css'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = {
      path: this.props.location.pathname
    };
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleClick1() {
    debugger
    this.setState({
      path: this.props.location.pathname
    });
  }

  handleClick2() {
    debugger
    this.setState({
      path: this.props.location.pathname
    });
  }

  handleClick3() {
    debugger
    this.setState({
      path: this.props.location.pathname
    });
  }
  // Selectively render links dependent on whether the user is logged in
  // <Link to={'/tweets'} className="navbar-header-link">All Tweets</Link>
  // <Link to={'/new_tweet'} className="navbar-header-link">Write a Tweet</Link>
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-fullscreen-tab">
          <Link to={'/users'} className={(this.state.path === "/users") ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick1()}>Find a Babble Buddy</Link>
          <Link to={'/chat'} className={(this.state.path === "/chat") ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick2()}>Live Chat</Link>
          <Link to={'/profile'} className={(this.state.path === "/profile") ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick3()}>Profile</Link>
          <button className="navbar-logout-button" onClick={this.logoutUser}>Logout</button>
        </div>
        )
      } else {
        return (
          <div>
              <Link to={'/signup'} className="navbar-signup-button">Signup</Link>
              <Link to={'/login'} className="navbar-signin-button">Login</Link>
          </div>
        );
      }
  }


  render() {
    debugger
      return (
        <div className="navbar">
            <h1 className="navbar-title">BabbleChat</h1>
            <div className="navbar-links">
              {this.getLinks()}
            </div>
        </div>
      );
  }
}

export default withRouter(NavBar);