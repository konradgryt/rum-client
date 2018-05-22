import React from 'react';
import ReactDOM from 'react-dom';
import Rum from './rum';
//import Utility from '../logic/utility';

class PaneBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  addclassOpen() {
    ReactDOM.findDOMNode(document.querySelector('#pane')).classList.add('open');
  }

  addclassClose() {
    ReactDOM.findDOMNode(document.querySelector('#pane')).classList.add('close');
  }

  render() {
    return (
      <section className={this.state.class}> 
          <i className="material-icons" onClick={() => { this.props.view.unmountPane()}} >close</i>
          <Rum />
      </section>
    );
  }
}

export default PaneBody;