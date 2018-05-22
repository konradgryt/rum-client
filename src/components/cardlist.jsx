import React from 'react';
import Utility from '../logic/utility';
import Rum from './rum';

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
  }

  render() {
    return (
      <section>
         {this.state.list.map(items =>
           <Rum name={items.name}
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