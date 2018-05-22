import React from 'react';
import Utility from '../logic/utility';

class Rum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleImageChange(event) {
        var input = event.target.files[0];

        this.setState({image: input});
    }

    handleSubmit(event) {
        let data = new FormData();
        const fileField = document.querySelector('input[type="file"]');

        data.append('name', this.state.name);
        data.append('image', fileField.files[0]);

        fetch('http://192.168.0.100:8080/rum', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json) {
                    this.setState({
                        message: this.SuccessMessage
                    });
                } else {
                    this.setState({
                        message: this.ErrorMessage
                    });
                }
            });
        event.preventDefault();
    }

    SuccessMessage = (
        <div>
            RUM ADDED MY MAN
        </div>
    );

    ErrorMessage = (
        <div>
            sadface
        </div>
    );

    render() {
        return (
            <section className='rum'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Rum</h1>
                    <div>
                        <label>Name
                            <input id='name' type='text' onChange={this.handleNameChange}/>
                        </label>
                        <label>jpg
                            <input hidden id='image-location' type='file' accept='image/*'
                                   onChange={this.handleImageChange}/>
                            <button onClick={() => document.getElementById('image-location').click()}>...</button>
                        </label>
                        <input type='submit' value='ok'/>
                    </div>
                    <div className='mainpage__input'>
                        {this.state.message}
                    </div>
                </form>
            </section>
        );
    }
}

export default Rum;