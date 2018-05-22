import React from 'react';
//import Utility from '../logic/utility';

class ReviewWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // {this.props.rumId} 
  // {this.props.userId}

  render() {
    return (
      <section className='reviewwindow'>
        <form onSubmit={this.handleSubmit}>
            <div>
              <input id='description' type='text' onChange={(e) => this.handleKeyChange('description', e)} placeholder='Review'/>
              <input id='rating' type='text' onChange={(e) => this.handleKeyChange('rating', e)} placeholder='Final Rating'/>
              <input type='submit' value='Add review'/>
            </div>
        </form>
      </section>
    );
  }
}

export default ReviewWindow;