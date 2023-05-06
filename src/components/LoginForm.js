import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "", 
      submittedData: []
    };
  }
    handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  

    handleSubmit = (event) => {
      event.preventDefault()
  
      let formData = {
        username: this.state.username,
        password: this.state.password
      }
  
      if (this.state.username && this.state.password !== ""){
        this.props.handleLogin(formData)
        let dataArray = this.state.submittedData.concat(formData);
        this.setState({ submittedData: dataArray });
      } 
    }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              onChange={this.handleInputChange} 
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              onChange={this.handleInputChange} 
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
