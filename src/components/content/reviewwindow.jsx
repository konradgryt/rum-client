import React from 'react';
//import Utility from '../logic/utility';

class ReviewWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='reviewwindow'>
       <textarea rows="4" cols="50" />
      </section>
    );
  }
}

export default ReviewWindow;