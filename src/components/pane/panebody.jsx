import React from 'react';
import PaneHeader from './paneheader';
import Rum from './rum';

class PaneBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={this.state.class}> 
          <PaneHeader view={this.props.view} />
          <Rum view={this.props.view}/>
      </section>
    );
  }
}

export default PaneBody;