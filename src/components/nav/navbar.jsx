import React from 'react';
//import Utility from '../utility';
import Rum from '../pane/rum';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      isPaneActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
        var pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
        if (pane.classList.contains('close')) {
            this.props.view.tooglePane();
        }
      this.props.view.refreshPane(<Rum view={this.props.view}/>, 'Add rum');
  }

  render() {
    return (
        <section className='navbar'>
            <div className='navbar__position-relative'>
                <i className="material-icons">search</i>
                <input className='navbar__navitem--search'/>
            </div>
            <div className='navbar__navitem'>Filtering</div>
            <ul>
                <li className='navbar__button' value='' type='button' onClick={this.handleClick}>Add new rum</li>
            </ul>
        </section>
    );
  }
}

export default NavBar;