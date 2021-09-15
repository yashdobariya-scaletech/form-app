import UserInput from './UserInput'
import './Form.css'
import React from 'react'

export default function Form(props) {

    const inputIsValid = !props.enteredInputIsValid && props.enteredInputIsTouched

    return (
        <div className="form">
                <form onSubmit={props.onSubmitHandle}>
                    <UserInput
                        lable='First Name:'
                        type='text'
                        name='name'
                        value={props.data.name}
                        updateInputFields={props.updateInputFields}
                        inputIsValid={inputIsValid}
                        inputBlurHandle={props.inputBlurHandle}

                    />
                    {inputIsValid && <p className="error">Please enter your lastName</p>}
                    
                    <UserInput
                        lable='Last Name:'
                        type='text'
                        name='lastName'
                        value={props.data.lastName}
                        updateInputFields={props.updateInputFields}
                        inputIsValid={inputIsValid}
                        inputBlurHandle={props.inputBlurHandle}

                        

                    />
                    {inputIsValid && <p className="error">Please enter your lastName</p>}

                    <UserInput
                        lable='Password:'
                        type='Password'
                        name='password'
                        value={props.data.password}
                        updateInputFields={props.updateInputFields}
                        inputIsValid={inputIsValid}
                        inputBlurHandle={props.inputBlurHandle}

                        

                    />
                    {inputIsValid && <p className="error">Please enter your lastName</p>}
                    
                    <div className="form-actions"> 
                        <button>Submit</button>
                    </div>
                </form>
        </div>
    )
}

