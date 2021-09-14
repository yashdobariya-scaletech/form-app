import React, { Component } from 'react'
import './UserInput.css'

export default class UserInput extends Component {
    render() {
        return (
            <form>
                <div className="form-control">
                    <label htmlFor="name">First Name:</label>
                    <input type="text"/>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Last Name:</label>
                    <input type="text"/>
                </div>
                <div className="form-actions"> 
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}
