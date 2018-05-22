import React from 'react';
//import Utility from '../logic/utility';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
          what
       {this.props.name}
      </section>
    );
  }
}

export default Card;