import UserInput from './UserInput'
import './Form.css'
import React, { Component } from 'react'

export default class Form extends Component {

    render() {
        return (
            <div className="form">
                <form onSubmit={this.submitHandle}>
                    <UserInput
                        type='text'
                        name='name'
                        value={this.props.data.name}
                        updateInputFields={this.props.updateInputFields}
                    />
                    <UserInput
                        type='text'
                        name='lastname'
                        value={this.props.data.lastName}
                        updateInputFields={this.props.updateInputFields}
                    />
                    <div className="form-actions"> 
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
