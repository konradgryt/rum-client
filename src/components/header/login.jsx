import React from 'react';
import Utility from '../utility';
import ReactDOM from "react-dom";
import Rum from "../pane/rum";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
                    message: this.ErrorMessage,
                });
            }
        });
        event.preventDefault();
    }

    ErrorMessage = (
        <div>
            Username or password is incorrect
        </div>
    );

    handleClick(event) {
        var pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
        if (pane.classList.contains('close')) {
            this.props.view.tooglePane(false);
        }
        this.props.view.refreshPane(<Rum view={this.props.view}/>, 'Add rum');
    }

    render() {
        return (
            <section className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div className='error'>
                        {this.state.message}
                    </div>
                    <input type='text' id='username' onChange={this.handleUsernameChange} placeholder='Username'/>
                    <input type='password' onChange={this.handlePasswordChange} placeholder='Password'/>
                    <input type='button' value='Sign Up' onClick={() => {
                        this.props.view.renderRegister()
                    }}/>
                    <input type='submit' value='Login'/>
                </form>
                <div className='login__new-rum' onClick={this.handleClick}>Add new rum</div>
            </section>
        );
    }
}

export default Login;