import React, { Component} from 'react';
import { Alert } from "react-native";

import config from '../config.js';
const firebase = require('firebase');


export class Form extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                name: "", 
                description: "", 
                message: "",  
                visibility: "", 
                email: ""
            },
        
        }
            
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('data');
        const item = {
            name: this.state.name,
            description: this.state.description,
            message: this.state.message,  
            visibility: this.state.visibility, 
            email: this.state.email
        
        }

        
  
        itemsRef.push(item);
       
        Alert.alert('Form was Successfull Summited!');

        this.setState({
            name: "", 
            description: "", 
            message: "",  
            visibility: "", 
            email: ""
        });
       
      }
   

    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <h2>Form</h2>
            <div>
                <p>What is you name?</p>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} minLength='5' maxLength='20' required/>
            </div>

            <div>
                <p>Offer a short description of yourself.</p>
                <input type="text" name="description" onChange={this.handleChange} maxLength='100' value={this.state.description} />
            </div>

            <div>
                <p>What is your message?</p>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} minLength='15' maxLength='500' required/>
            </div>

            <div>
                <p>Would you like your message to be private?</p>
                    <input type="text" name="visibility" onChange={this.handleChange} value={this.state.visibility} required/>
            </div>

            <div>
                <p>What is your email?</p>
                <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
            </div>
            <button>Summit Form</button>
        </form>


    )
    }
  
}
export default Form;


