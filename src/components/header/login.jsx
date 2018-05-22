import React from 'react';
import Utility from '../utility';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        var data = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        });
        Utility.post('/user/login', data).then(json => {
            console.log(json);
            if (json) {
                this.props.view.renderOverview(this.state.username);
            } else {
                this.setState({
                    message: this.ErrorMessage
                });
            }
        });
        event.preventDefault();
    }

    ErrorMessage = (
        <div>
            error
        </div>
    );

    render() {
        return (
            <section className='login'>
                <form onSubmit={this.handleSubmit}>
                    <input type='submit' id='password' value='Login'/>
                    <input type='text' id='username' onChange={this.handleUsernameChange} placeholder='Username'/>
                    <input type='password' onChange={this.handlePasswordChange} placeholder='Password'/>
                    <div>
                        {this.state.message}
                    </div>
                </form>
            </section>
        );
    }
}

export default Login;