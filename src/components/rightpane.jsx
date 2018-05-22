import React from 'react';
import Rum from './rum';
//import Utility from '../logic/utility';

class RightPane extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
          <Rum />
      </section>
    );
  }
}

export default RightPane;