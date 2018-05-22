import React from 'react';
import Utility from '../utility';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //   Utility.get('/users').then(json => {
    //     console.log(json);
    //       this.setState({
    //         users: json
    //       });
    //     });
    // }

    handleNicknameChange(event) {
        this.setState({nickname: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        var data = JSON.stringify({
            username: this.state.nickname,
            password: this.state.password
        });
        Utility.post('/user/register', data).then(json => {
            if (json.saved === true) {
                console.log(json);
                this.setState({
                    message: this.SuccessMessage
                });
            } else if (json.saved === false) {
                console.log(json);
                this.setState({
                    message: this.ErrorMessage
                });
            }
        });
        this.props.view.renderLogin();
        event.preventDefault();
    }

    SuccessMessage = (
        <div className='register__input--message'>
            success!
        </div>
    );

    ErrorMessage = (
        <div className='register__input--message'>
            error!
        </div>
    );

    render() {
        return (
            <section className='register'>
                <form onSubmit={this.handleSubmit}>
                    <input type='submit' value='OK'/>
                        <input className='register__input' id='nickname' type='text' placeholder='Username'
                               onChange={this.handleNicknameChange}/>
                        <input className='register__input' id='password' type='password'
                               placeholder='Password' onChange={this.handlePasswordChange}/>
                    <div className='register__input'>
                        {this.state.message}
                    </div>
                    <input type='button' value='Sign In' onClick={() => {this.props.view.renderLogin()}}/>
                </form>
                <div className='login__new-rum' onClick={this.handleClick}>Add new rum</div>
            </section>
        );
    }
}

export default Register;