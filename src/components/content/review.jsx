import React from 'react';
//import Utility from '../logic/utility';

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='review'>
        <div> rum - {this.props.rumId}</div> 
        <div> userid - {this.props.userId}</div>
        <div> rating - {this.props.rating}</div>
        <div> Image - {this.props.image}</div>
        <div> additionalinfo - {this.props.additionalInfo}</div>
      </section>
    );
  }
}

export default Review;