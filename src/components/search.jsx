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
            <div className='navbar__position-relative'>
                <i className="material-icons">search</i>
                <input className='navbar__navitem--search'/>
            </div>
            <div className='navbar__navitem'>Filtering</div>
            
            <div onClick={this.handleClick}>Add rum </div>
        </section>
    );
  }
}

export default Search;