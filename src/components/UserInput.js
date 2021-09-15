import './UserInput.css'
import React from 'react'

export default function UserInput(props) {

    const inputFieldClasses = !props.inputIsValid ? 'form-control' : 'form-control invalid'

    return (
        <div className={inputFieldClasses}>
            <label htmlFor="name">{props.lable}</label>
            <input  className='' 
                    type={props.type} 
                    name={props.name} 
                    value={props.value} 
                    onChange={(event) => {props.updateInputFields(props.name,event)}}
                    onBlur={(event) => {props.inputBlurHandle(event)}}
                    />
        </div>
    )
}
