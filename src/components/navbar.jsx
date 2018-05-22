import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section className='navbar'>
            <div className='navbar__position-relative'>
                <i className="material-icons">search</i>
                <input className='navbar__navitem--search'/>
            </div>
            <div className='navbar__navitem'>Filtering</div>
        </section>
    );
  }
}

export default NavBar;