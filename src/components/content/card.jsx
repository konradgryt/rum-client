import React from 'react';
//import Utility from '../logic/utility';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='card'>
        <div> Rum card: </div>
        <div> Name {this.props.name}</div>
        <div> Image {this.props.image}</div>
        <div> % {this.props.percentage}</div>
        <div> year of brew {this.props.yearOfBrew}</div>
        <div> producer {this.props.producer}</div>
        <div> type of rum {this.props.typeOfRum}</div>
        <div> kettle type {this.props.kettleType}</div>
        {this.props.reviews}
      </section>
    );
  }
}

export default Card;