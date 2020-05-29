import React, { Component } from 'react';
const firebase = require('firebase');

export class CreateList extends Component {
    constructor() {
        super();
        this.state = {
            lists: {
                name: ""
            },

            items: [],
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
        const itemsRef = firebase.database().ref('lists');

        itemsRef.orderByChild("name").equalTo(this.state.name).once('value', (snapshot) => {
            if (!snapshot.exists()) {
                const item = {
                    name: this.state.name,
                }

                itemsRef.push(item);

                alert('Form was Successfull Summited!');

                this.setState({
                    name: "",
                });
            } else {
                alert("List already exists!")
            }
        });
    }

    render() {
        document.title = "Create List";
        return (
            <div>
                <div className="headerForPages">
                    <h1>Create List</h1>
                </div>

                <form className='formAddMovie' onSubmit={this.handleSubmit}>
                    <div className='formElements'>
                        <p>List Name</p>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} required />
                    </div>
                    <button className='formButton'>Submit</button>
                </form>
            </div>

        );
    }
}
export default CreateList;