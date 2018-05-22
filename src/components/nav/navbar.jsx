import React from 'react';
//import Utility from '../utility';
import Rum from '../pane/rum';
import ReactDOM from 'react-dom';
import RumPane from "../pane/rumpane";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaneActive: false,
            results: [],
            arrow: <i className="material-icons">
                arrow_forward_ios
            </i>
        };
    }


    handleChange = (e) => {
        if (e.target.value.toString().trim().length < 2) {
            this.setState({results: []});
            return;
        }
        fetch('http://192.168.0.100:8080/rum?name=' + e.target.value + '&limit=5')
            .then((res) => res.json())
            .then((result) => this.setState({results: result}));
    };

    onClick = (item, e) => {
        let pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
        ;
        if (pane.classList.contains('close')) {
            this.props.view.tooglePane();
        }
        this.props.view.refreshPane(<RumPane
            view={this.props.view}
            key={item.name}
            name={item.name}
            image={item.image}
            percentage={item.percentage}
            yearOfBrew={item.yearOfBrew}
            producer={item.producer}
            typeOfRum={item.typeOfRum}
            kettleType={item.kettleType}
            reviews={item.reviews}/>, item.name);
    };

    onClickOpen = (e) => {
        this.props.view.toggleNav();
    };

    getArrow = () => {
            let nav = ReactDOM.findDOMNode(document.querySelector('#nav'));
            if(nav.classList.contains('close')){
                this.setState({ arrow: <i className="material-icons">
                    arrow_forward_ios
                </i>});
            } else {
                this.setState({ arrow: <i className="material-icons">
                    arrow_back_ios
                </i>});
            }
    };

    render() {
        return (
            <section className='navbar'>
                <div className="navbar__button" onClick={(e) => {this.onClickOpen(e); this.getArrow()}}>
                    {this.state.arrow}
                </div>
                <div className='navbar__position-relative'>
                    <i className="material-icons">search</i>
                    <input className='navbar__navitem--search' value={this.state.inputValue}
                           onChange={this.handleChange}/>
                    {
                        this.state.results.map((item) => {
                            return <div tabIndex='1' className='navbar__results'
                                        onClick={(e) => this.onClick(item, e)}>{item.name}</div>;
                        })
                    }
                </div>
            </section>
        );
    }
}

export default NavBar;