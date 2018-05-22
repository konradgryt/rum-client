import React from 'react';

class NavBar extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      isPaneActive: false,
      buttonValue: 'Open pane'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.isPaneActive) {
      this.setState({
        isPaneActive: true,
        buttonValue: 'Close pane'
      })
      this.props.view.renderPane();
    } else {
        this.setState({
        isPaneActive: false,
        buttonValue: 'Open pane'
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
            <input className='navbar__button' value={this.state.buttonValue} type='button' onClick={this.handleClick} />
        </section>
    );
  }
}

export default NavBar;