import React from 'react';
import Utility from '../logic/utility';
import Rum from './rum';

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <section>
        <Rum />
      </section>
    );
  }
}

export default CardList;