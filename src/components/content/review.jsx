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
        <div className='img' style={ {backgroundImage: 'url(http://192.168.0.100:8080/image/' + this.props.image + ')'} }></div>
        <div> rating:{this.props.rating}</div>
        <div> message: {this.props.message}</div>
      </section>
    );
  }
}

export default Review;