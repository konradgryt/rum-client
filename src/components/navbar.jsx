import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section className='navbar'>
            <div className='navbar__navitem'>1</div>
            <div className='navbar__navitem'>2</div>
            <div className='navbar__navitem'>3</div>
            <div className='navbar__navitem'>4</div>
            <div className='navbar__navitem'>5</div>
        </section>
    );
  }
}

export default NavBar;