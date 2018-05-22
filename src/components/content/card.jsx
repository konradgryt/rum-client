import React from 'react';
//import ReviewList from './reviewlist';
//import Utility from '../logic/utility';
 import Review from './review';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='card'>
        <div>{this.props.image}</div>
        <div className='card__description'> 
          <div>Name{this.props.name}</div>
          <div>% {this.props.percentage}</div>
          <div>year of brew {this.props.yearOfBrew}</div>
          <div>producer {this.props.producer}</div>
          <div>type of rum {this.props.typeOfRum}</div>
          <div>kettle type {this.props.kettleType}</div>
          <div>reviews: 
          {this.props.reviews.map(items =>
                <Review 
                  image = {items.image}
                  rumId = {items.rumId}
                  userId=  {items.userId}
                  rating = {items.userId}
                  additionalInfo = {items.additionalInfo}
              />)}
          </div>
        </div>
      </section>
    );
  }
}

export default Card;