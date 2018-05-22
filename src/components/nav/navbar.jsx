import React from 'react';
import Utility from '../utility';
import Rum from '../pane/rum';

class NavBar extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      isPaneActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.isPaneActive) {
      this.setState({
        isPaneActive: true
      })
      this.props.view.refreshPane(<Rum view={this.props.view}/>);
      Utility.saveToLocalStorage('currentbody', 'Rum');
      this.props.view.renderPane();
    } else {
        this.setState({
        isPaneActive: false
      })      
      this.props.view.unmountPane();
    }
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