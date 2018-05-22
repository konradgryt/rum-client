import React from 'react';
import Review from "../content/review";
import ReviewWindow from '../content/reviewwindow';
//import Utility from '../utility';

class RumPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = { review : 'hide', reviewValue: 'Write Review'};
    }
    handleClick() {
        console.log('clicked');
        if (this.state.review === 'hide') {
            this.setState({
                review: 'show',
                reviewValue: 'Cancel'
            });
        } else if (this.state.review === 'show') {
               this.setState({
                review: 'hide',
                reviewValue: 'Write Review'
            });
        }
    }

    render() {
        return (
            <div className="rum-pane">
                <div className="rum-pane__image" style={{backgroundImage: 'url(http://192.168.0.100:8080/image/' + this.props.image + ')'}}>
                </div>
                <div className="rum-pane__description">
                    <div><span className="rum-pane__description--left-alignment">Name</span>{this.props.name}</div>
                    <div><span className="rum-pane__description--left-alignment">Percentage</span>{this.props.percentage}%</div>
                    <div><span className="rum-pane__description--left-alignment">Year of brew</span>{this.props.yearOfBrew}</div>
                    <div><span className="rum-pane__description--left-alignment">Producer</span>{this.props.producer}</div>
                    <div><span className="rum-pane__description--left-alignment">Type of rum</span>{this.props.typeOfRum}</div>
                    <div><span className="rum-pane__description--left-alignment">Kettle type</span>{this.props.kettleType}</div>
                    <div><span className="rum-pane__description--left-alignment">Reviews</span>{this.props.reviews.map(item => <Review
                        image={item.image}
                        rumId={item.rumId}
                        userId={item.userId}
                        rating={item.rating}
                        additionalInfo={item.additionalInfo}
                    />)}</div>
                     <div id='makereview' class='hide' onClick={(e) => this.handleClick(e)}><span className="rum-pane__description--left-alignment">{this.state.reviewValue}
                    </span></div>
                    <div class={this.state.review}>
                        <ReviewWindow  />
                    </div>
                </div>
            </div>
        )
    }
}

export default RumPane;