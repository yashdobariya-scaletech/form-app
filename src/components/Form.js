import UserInput from './UserInput'
import './Form.css'
import React from 'react'

export default function Form(props) {

    return (
        <div className="form">
                <form onSubmit={props.onSubmitHandle}>
                    
                    <UserInput
                        lable='First Name:'
                        type='text'
                        name='firstName'
                        value={props.data.firstName.value}
                        updateInputFields={props.updateInputFields}
                    />
                    {(props.data.firstName.value === '' && props.data.firstName.isTouched) && <p className="error">Please enter your Name</p>}
                    
                    <UserInput
                        lable='Last Name:'
                        type='text'
                        name='lastName'
                        value={props.data.lastName.value}
                        updateInputFields={props.updateInputFields}
                    />
                    {(props.data.lastName.value === '' && props.data.lastName.isTouched) && <p className="error">Please enter your Last Name</p>}

                    <UserInput
                        lable='Password:'
                        type='Password'
                        name='password'
                        value={props.data.password.value}
                        updateInputFields={props.updateInputFields}
                    />
                    {(props.data.password.value === '' && props.data.password.isTouched) && <p className="error">Please enter your password</p>}
                    
                    <div className="form-actions"> 
                        <button>Submit</button>
                    </div>
                </form>
        </div>
    )
}

