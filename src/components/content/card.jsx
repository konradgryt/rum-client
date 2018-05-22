import React from 'react';
import ReactDOM from 'react-dom';
//import ReviewList from './reviewlist';
//import Utility from '../utility';
import Review from './review';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    focusCard() {
        var pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
        if (pane.classList.contains('close')) {
            this.props.view.tooglePane();
        }
        this.props.view.refreshPane(<Card 
            view={this.props.view}
            key={this.props.name}
            name={this.props.name}
            image={this.props.image}
            percentage={this.props.percentage}
            yearOfBrew={this.props.yearOfBrew}
            producer={this.props.producer}
            typeOfRum={this.props.typeOfRum}
            kettleType={this.props.kettleType}
            reviews={this.props.reviews} />);
    }

    render() {
        return (
            <section className='card' onClick={this.focusCard.bind(this)}>
                <div className='card__image-wrapper' style={ {backgroundImage: 'url(http://192.168.0.100:8080/image/' + this.props.image + ')'} }>
                </div>
                <div className='card__description'>
                    <div><span className='card__description--left-alignment'>Name:</span>{this.props.name}</div>
                    <div><span className='card__description--left-alignment'>Percentage:</span>{this.props.percentage}%
                    </div>
                    <div><span className='card__description--left-alignment'>Year of brew:</span>{this.props.yearOfBrew}
                    </div>
                    <div><span className='card__description--left-alignment'>Producer:</span>{this.props.producer}</div>
                    <div><span className='card__description--left-alignment'>Type of rum:</span>{this.props.typeOfRum}
                    </div>
                    <div><span className='card__description--left-alignment'>Kettle type:</span>{this.props.kettleType}
                    </div>
                    <div><span className='card__description--left-alignment'>Reviews:</span>
                         {this.props.reviews.map(items =>
                            <Review
                                image={items.image}
                                rumId={items.rumId}
                                userId={items.userId}
                                rating={items.userId}
                                additionalInfo={items.additionalInfo}
                            />)} 
                    </div>
                </div>
            </section>
        );
    }
}

export default Card;