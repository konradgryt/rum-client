import React from 'react';
import Utility from '../utility';
import Card from './card';

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list : []};
  }

  componentDidMount() {
    Utility.get('/rum').then(json => {
      console.log(json);
        this.setState({
          list: json
        });
      });
    // Utility.get('/review').then(json => {
    //   console.log(json);
    //     this.setState({
    //       list: json
    //     });
    //   });
  //}

  }

  render() {
    return (
      <section className='cardlist'>
         {this.state.list.map(items =>
           <Card 
                 key={items.name}
                 name={items.name}
                 image={items.image}
                 percentage={items.percentage}
                 yearOfBrew={items.yearOfBrew}
                 producer={items.producer}
                 typeOfRum={items.typeOfRum}
                 kettleType={items.kettleType}
                 reviews={items.reviews} />
        )}
      </section>
    );
  }
}

export default CardList;