import React from 'react';
import Utility from '../logic/utility';

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
    var data = JSON.stringify ({
        username: this.state.username,
        password: this.state.password
    });
    Utility.post('/user/login', data ).then(json => {
      console.log(json);
        if (json) {
            this.setState({
                message : this.SuccessMessage
            });
        } else {
            this.setState({
                message : this.ErrorMessage
            });
        }
    });
    event.preventDefault();
  }

  SuccessMessage = (
    <div> 
      success!
    </div>
  );

  ErrorMessage = (
    <div> 
      bad luck my boi
    </div>
  );

  render() {
    return (
      <section className='login'>
        <form onSubmit={this.handleSubmit}>
            <div>Login</div>
          <div>
            <label>Username:
              <input type='text' id='username' onChange={this.handleUsernameChange} />
            </label>
          </div>
          <div> 
            <label>Password:
              <input type='password' onChange={this.handlePasswordChange}  />
            </label>
            <input type='submit' id='password' value='ok' />
          </div>
          <div>
            {this.state.message}
          </div>
        </form>
      </section>
    );
  }
}

export default Login;