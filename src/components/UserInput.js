import './UserInput.css'
import React from 'react'

export default function UserInput(props) {
    
    return (
        <div className='form-control'>
            <label htmlFor="name">{props.lable}</label>
            <input  className='' 
                    type={props.type} 
                    name={props.name} 
                    value={props.value} 
                    onChange={(event) => {props.updateInputFields(props.name,event)}}
                    />
        </div>
    )
}
