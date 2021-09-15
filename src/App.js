import React, { Component } from 'react'
import Form from "./components/Form";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      formData: {
        name:'',
        lastName: '',
        password:''
      },
      erroes:{
      },
      enteredInputIsValid:false,
      enteredInputIsTouched:false
    }
  }
  

  // validationHandle = () => {
  //   console.log("hey valid");
  //   let fromData = this.state.formData;
  //   let errors = {};
  //   let formIsValid = true;

  //   if(fromData['name'] === '' ){
  //     formIsValid = false;
  //     console.log(formIsValid);
  //     errors['name'] = "Please enter your name"
  //   }

  //   if(fromData['lastName'] === '' ){
  //     formIsValid = false;
  //     console.log(formIsValid);
  //     errors['name'] = "Please enter your lastName"
  //   }

  //   if(fromData['password'] === '' && fromData['password'].length <=5 ){
  //     formIsValid = false;
  //     console.log(formIsValid,'call');
  //     errors['name'] = "Please enter your password"
  //   }

  //   this.setState({errors});
  //   return formIsValid;
  // }

  submitHandle = event => {
    event.preventDefault()

    // if(this.validationHandle()){
    //   console.log("submitted");
    // } else {
    //   alert("Form has errors.");
    // }

    const formData = {
        name:'',
        lastName: '',
        password:''
    }
    this.setState({
        formData,
        enteredInputIsTouched:true
      });
  }





  updateInputFields = (fieldName, event) => {

    const formData = {...this.state.formData};
    if(event.target.value.trim() !== ''){
      console.log("calllll");
      formData[fieldName] = event.target.value
      this.setState({
          formData,
          enteredInputIsValid:true
        })
    }

    // if(event.target.value.trim() !=='' && event.target.value.length >= 0){
    //   const formData = {...this.state.formData};
    //   formData[fieldName]=event.target.value
    //   this.setState({formData})
    //   console.log('if call');
    // }else{
    //   console.log(fieldName);
    //   let targetEle = event.target
    //   console.log(targetEle);
    //   targetEle.classList.add('show-error');
    // }
  }


  inputBlurHandle = () => {
    this.setState({
      enteredInputIsTouched:true
    });

    const formData = this.state.formData

    if(formData['name'].trim() === ''){
      this.setState({
        enteredInputIsValid:false
      })
    }
    console.log("blue");

  }

  render() {

    return (
      <div className="container">
          <Form
            data={this.state.formData}
            onSubmitHandle={this.submitHandle}
            updateInputFields={this.updateInputFields}
            enteredInputIsValid={this.state.enteredInputIsValid}
            enteredInputIsTouched={this.state.enteredInputIsTouched}
            inputBlurHandle={this.inputBlurHandle}
          />
      </div>
    )
  }
}
