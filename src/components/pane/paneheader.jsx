import React from 'react';
//import ReactDOM from 'react-dom';
//import Utility from '../logic/utility';

class PaneHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className='panebody__header'>
            <i className="material-icons" onClick={() => { this.props.view.unmountPane()}} >close</i>
            Add rum
        </div>
    );
  }
}

export default PaneHeader;