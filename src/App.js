import React, { Component } from 'react'
import Form from "./components/Form";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      formData: {

        firstName: {
          isTouched: false,
          value: ''
        },
        lastName:{
          isTouched: false,
          value: ''
        },
        password:{
          isTouched: false,
          value: ''
        }
      },
    }
  }
  

  submitHandle = event => {
    event.preventDefault();

    const formData = {...this.state.formData};

    ['firstName', 'lastName', 'password'].map((fieldName) => {

      if (formData[fieldName].value === '') {
          formData[fieldName].isTouched = true
      } else {
        formData[fieldName].value = ''
        formData[fieldName].isTouched = false
      }
      this.setState({
        formData,
      })
    })

    console.log(formData,"form submited");
  }



  updateInputFields = (fieldName, event) => {

  const formData = {...this.state.formData};

    formData[fieldName] = {
      isTouched: true,
      value: event.target.value
    }
    this.setState({
      formData,
    })
  }

  render() {
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
