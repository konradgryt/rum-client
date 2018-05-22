import React from 'react';
import Utility from '../logic/utility';

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

    componentWillUnmount() {
        console.log('i need to make unmount method so it wont show error');
    }

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
        <div className='mainpage__input--message'>
            success!
        </div>
    );

    ErrorMessage = (
        <div className='mainpage__input--message'>
            error!
        </div>
    );

    render() {
        return (
            <section className='mainpage'>
                <form onSubmit={this.handleSubmit}>
                    <input type='submit' value='OK'/>
                    <div className='mainpage__input'>
                        <input className='mainpage__input--textfield' id='nickname' type='text' placeholder='Username'
                               onChange={this.handleNicknameChange}/>
                    </div>
                    <div className='mainpage__input'>
                        <input className='mainpage__input--textfield' id='password' type='password'
                               placeholder='Password' onChange={this.handlePasswordChange}/>
                    </div>
                    <div className='mainpage__input'>
                        {this.state.message}
                    </div>
                </form>
            </section>
        );
    }
}

export default Register;