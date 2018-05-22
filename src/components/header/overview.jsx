import React from 'react';
import RumPane from '../pane/rum';
import Utility from '../utility';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Utility.saveToLocalStorage('allowReviews', 'true');
  }
  render() {
    return (
      <section className='overview'>
        Logged in as {this.props.username}
        <input type='button' value='Logout' onClick={() => Utility.saveToLocalStorage('allowReviews', 'false')}/>
      </section>
    );
  }
}

export default Overview;