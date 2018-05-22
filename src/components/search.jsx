import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section className='navbar'>
            <input className='navbar__navitem--search' placeholder='Search...'/>
            <div className='navbar__navitem'>Filtering</div>
        </section>
    );
  }
}

export default Search;