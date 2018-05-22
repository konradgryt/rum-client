import React from 'react';
import ReactDOM from 'react-dom';
//import ReviewList from './reviewlist';
//import Utility from '../utility';
import Review from './review';
import RumPane from "../pane/rumpane";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    focusCard() {
        let pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
        this.props.view.refreshPane(<RumPane
            view={this.props.view}
            key={this.props.name}
            name={this.props.name}
            image={this.props.image}
            percentage={this.props.percentage}
            yearOfBrew={this.props.yearOfBrew}
            producer={this.props.producer}
            typeOfRum={this.props.typeOfRum}
            kettleType={this.props.kettleType}
            reviews={this.props.reviews} />, this.props.name);
        if (pane.classList.contains('close')) {
            this.props.view.tooglePane(true);
        }
    }

    render() {
        return (
            <section className='card' onClick={this.focusCard.bind(this)}>
                <div className="card__header">{this.props.name}</div>
                <div className='card__image-wrapper' style={ {backgroundImage: 'url(http://192.168.0.100:8080/image/' + this.props.image + ')'} }>
                </div>
            </section>
        );
    }
}

export default Card;