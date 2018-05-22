import React from 'react';
import PaneHeader from './paneheader';
// import Rum from './rum';
// import Card from '../content/card';
// import Utility from '../utility';

class PaneBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section className={this.state.class}> 
          <PaneHeader view={this.props.view} header={this.props.header}/>
          {this.props.body}
      </section>
    );
  }
}

export default PaneBody;