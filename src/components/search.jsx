import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.view.renderPane();
  }

  render() {
    return (
        <section className='navbar'>
            <input className='navbar__navitem--search' placeholder='Search...'/>
            <div className='navbar__navitem'>Filtering</div>
            
            <div onClick={this.handleClick}>Add rum </div>
        </section>
    );
  }
}

export default Search;