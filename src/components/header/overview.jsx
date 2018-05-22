import React from 'react';
import Utility from '../utility';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Utility.saveToLocalStorage('allowReviews', 'true');
    if (Utility.getFromLocalStorage('taskpaneActive') === 'true'){
     this.props.view.toogleReviews();
    }
  }

  logout() {
    Utility.saveToLocalStorage('allowReviews', 'false');
    if (Utility.getFromLocalStorage('taskpaneActive') === 'true'){
     this.props.view.turnOffReviews();
    }
    this.props.view.renderLogin();
  }
  render() {
    return (
      <section className='overview'>
        Logged in as {this.props.username}
        <input type='button' value='Logout' onClick={() => this.logout()}/>
      </section>
    );
  }
}

export default Overview;