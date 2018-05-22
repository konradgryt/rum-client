import React from 'react';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='overview'>
       Logged in as {this.props.username}
      </section>
    );
  }
}

export default Overview;