import React from 'react';
import Search from './search';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { navBarType: this.Initial};
  }

  componentDidMount(){
    this.refreshNavbar();
  }

  refreshNavbar() {
    this.setState({
      navBarType : this.Search
    })
  }

  Initial = (
    <Search />
  );

  Search  = (
    <Search />
  );

  render() {
    return (
      this.state.navBarType
    );
  }
}

export default NavBar;