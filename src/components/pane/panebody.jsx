import React from 'react';
import Rum from './rum';
//import Utility from '../logic/utility';

class PaneBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='panebody'>
          <Rum />
      </section>
    );
  }
}

export default PaneBody;