import React, { Component } from 'react'
import './UserInput.css'


export default class UserInput extends Component {
    render() {
        return (
            <div className="form-control">
                <label htmlFor="name">First Name:</label>
                <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={(event) => {this.props.updateInputFields(this.props.name,event)}}/>
            </div>
        )
    }
}
