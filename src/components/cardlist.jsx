import React from 'react';
import Utility from '../logic/utility';
import Rum from './rum';

class CardList extends React.Component {

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
      <section>
          <div items={this.state.list} onRenderCell={(items) => (
            <section>
                <Rum name={items.name}
                 image={items.image}
                 percentage={items.percentage}
                 yearOfBrew={items.yearOfBrew}
                 producer={items.producer}
                 typeOfRum={items.typeOfRum}
                 kettleType={items.kettleType}
                 reviews={items.reviews} />
            </section>
        )}/>
      </section>
    );
  }
}

export default CardList;