import React from 'react';
//import ReviewList from './reviewlist';
//import Utility from '../logic/utility';
import Review from './review';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className='card'>
                <img src={'http://192.168.0.100:8080/image/' + this.props.image} alt=''/>
                <div className='card__description'>
                    <div><span className='card__description--left-alignment'>Name:</span>{this.props.name}</div>
                    <div><span className='card__description--left-alignment'>Percentage:</span>{this.props.percentage}%</div>
                    <div><span className='card__description--left-alignment'>Year of brew:</span>{this.props.yearOfBrew}</div>
                    <div><span className='card__description--left-alignment'>Producer:</span>{this.props.producer}</div>
                    <div><span className='card__description--left-alignment'>Type of rum:</span>{this.props.typeOfRum}</div>
                    <div><span className='card__description--left-alignment'>Kettle type:</span>{this.props.kettleType}</div>
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