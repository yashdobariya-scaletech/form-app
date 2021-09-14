import React, { Component } from 'react'
import Form from "./components/Form";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      formData: {
        name:'',
        lastName: ''
      }
    }
  }

  submitHandle = userData => {
    console.log(userData,"dataa");
    this.setState({
      name:userData
    });
  }

  updateInputFields = (fieldName, event) => {
    const formData = {...this.state.formData};
    formData[fieldName]=event.target.value
    this.setState({formData})
  }

  render() {
    console.log(this.state, 'tee');
    return (
      <div className="container">
          <Form
            data={this.state.formData}
            onSubmitHandle={this.submitHandle}
            updateInputFields={this.updateInputFields}
          />
      </div>
    )
  }
}
