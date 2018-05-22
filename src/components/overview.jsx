import React from 'react';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
       {this.props.username}
      </section>
    );
  }
}

export default Overview;