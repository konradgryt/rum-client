import React from 'react';

//import Utility from '../logic/utility';

class ReviewWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(event) {
        let data = new FormData();
        const fileField = document.querySelector('input[type="file"]');

        data.append('message', this.state.message);
        data.append('rating', this.state.rating);
        data.append('image', fileField.files[0]);

        fetch('http://192.168.0.100:8080/review', {
            method: 'POST',
            body: data
        }).then(res => res.json())
            .then(json => {
                console.log(json);
            });
        event.preventDefault();

    }

    handleImageChange(event) {
        let input = event.target.files[0];

        this.setState({image: input});
    }

    handleKeyChange(key, event) {
        this.setState({[key]: event.target.value});
    }

    render() {
        return (
            <section className='reviewwindow'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <input id='rating' type='text' onChange={(e) => this.handleKeyChange('rating', e)}
                               placeholder='Rating'/>
                        <input id='message' type='text' onChange={(e) => this.handleKeyChange('message', e)}
                               placeholder='Message'/>
                        <input type='file' accept='image/*' onChange={(e) => this.handleImageChange(e)}/>
                        <input type='submit' value='Add review'/>
                    </div>
                </form>
            </section>
        );
    }
}

export default ReviewWindow;