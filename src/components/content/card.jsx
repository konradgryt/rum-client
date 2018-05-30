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

    focusCard(event) {
        // let pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
        // this.props.view.refreshPane(<RumPane
        //     view={this.props.view}
        //     key={this.props.name}
        //     name={this.props.name}
        //     image={this.props.image}
        //     percentage={this.props.percentage}
        //     yearOfBrew={this.props.yearOfBrew}
        //     producer={this.props.producer}
        //     typeOfRum={this.props.typeOfRum}
        //     kettleType={this.props.kettleType}
        //     reviews={this.props.reviews} />, this.props.name);
        // if (pane.classList.contains('close')) {
        //     this.props.view.tooglePane(true);
        // }
        event.target.parentNode.parentNode.classList.toggle('hidden');
    }

    render() {
        return (
            <section className='card hidden'>
                <div className="background"></div>

                <div className="flexrow">
                    <div className="card__header">{this.props.name}</div>
                    <div className='card__image-wrapper' style={ {backgroundImage: 'url(http://192.168.0.100:8080/image/' + this.props.image + ')'} } onClick={this.focusCard.bind(this)}>
                </div>
                </div>
                <div className="details">
                    <span className='details__header'>Name</span>
                    <span>{this.props.name}</span>
                    <span className='details__header'>Percentage</span>
                    <span>{this.props.percentage}</span>
                    <span className='details__header'>Year of brew</span>
                    <span>{this.props.yearOfBrew}</span>
                    <span className='details__header'>Producer</span>
                    <span>{this.props.producer}</span>
                    <span className='details__header'>Type of rum</span>
                    <span>{this.props.typeOfRum}</span>
                    <span className='details__header'>Kettle type</span>
                    <span>{this.props.kettleType}</span>
                    <span className='details__review'>Write review</span>
                </div>
            </section>
        );
    }
}

export default Card;