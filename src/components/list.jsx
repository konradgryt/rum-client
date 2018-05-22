import React from 'react';
import Utility from '../logic/utility';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Utility.get('/rum').then(json => {
      console.log(json);
        this.setState({
          list: json
        });
      });
  }

  render() {
    return (
      <section className='list'>
     
      </section>
    );
  }
}

export default List;