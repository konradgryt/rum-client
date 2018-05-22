import React from 'react';

class Rum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeyChange(key, event) {
        this.setState({[key]: event.target.value});
    }

    handleImageChange(event) {
        let input = event.target.files[0];

        this.setState({image: input});
    }

    handleSubmit(event) {
        let data = new FormData();
        const fileField = document.querySelector('input[type="file"]');

        data.append('name', this.state.name);
        data.append('percentage', this.state.percentage);
        data.append('yearOfBrew', this.state.yearOfBrew);
        data.append('producer', this.state.producer);
        data.append('typeOfRum', this.state.typeOfRum);
        data.append('kettleType', this.state.kettleType);

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
                        <input id='name' type='text' onChange={(e) => this.handleKeyChange('name', e)}
                               placeholder='Name of rum'/>
                        <input id='percentage' type='text' onChange={(e) => this.handleKeyChange('percentage', e)}
                               placeholder='Percentage'/>
                        <input id='yearOfBrew' type='text' onChange={(e) => this.handleKeyChange('yearOfBrew', e)}
                               placeholder='Year of brew'/>
                        <input id='producer' type='text' onChange={(e) => this.handleKeyChange('producer', e)}
                               placeholder='Producer'/>
                        <input id='typeOfRum' type='text' onChange={(e) => this.handleKeyChange('typeOfRum', e)}
                               placeholder='Type of rum'/>
                        <input id='kettleType' type='text' onChange={(e) => this.handleKeyChange('kettleType', e)}
                               placeholder='Kettle type'/>
                        <input hidden id='image-location' type='file' accept='image/*'
                               onChange={this.handleImageChange}/>
                        <button onClick={() => document.getElementById('image-location').click()}>...</button>
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