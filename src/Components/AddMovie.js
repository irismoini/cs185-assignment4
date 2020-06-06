import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert } from "react-native";
import { useAlert } from 'react-alert'
import config from '../config.js';
import axios from 'axios';

const firebase = require('firebase');

export class AddMovie extends Component {

    constructor() {
        super();
        this.state = {
            movies: {
                imbdId: "",
                poster: "",
                title: "",
                director: "",
                rating: "",
                actors:"",
                inList: ""
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
        const itemsRef = firebase.database().ref('movies');

        const theId = this.state.imbdId

        //make a call using axios 
        axios.get("https://www.omdbapi.com/?apikey=36739a38&i=" + this.state.imbdId).then((response) => {

            if (response.data.Response === "False") {
                alert('Not a valid imdbID');
            } else {
                itemsRef.orderByChild("imbdId").equalTo(theId).once('value', (snapshot) => {

                    if (!snapshot.exists()) {
                        const item = {
                            imbdId: theId,
                            poster: response.data.Poster,
                            title: response.data.Title,
                            director: response.data.Director,
                            rating: response.data.imdbRating,
                            actors: response.data.Actors,
                            inList: ["All"]
                        }

                        itemsRef.push(item);
                        alert('Form was Successfull Summited!');
                    } else {
                        alert("Movie already added");
                    }
                });
            }
        });
    }

    render() {
        document.title = "Add Movie";
        return (
            <div>
                <div className="headerForPages">
                    <h1>Add Movie</h1>
                </div>

                <form className='formAddMovie' onSubmit={this.handleSubmit}>
                    <div className='formElements'>
                        <p>Moive imbdId</p>
                        <input type="text" name="imbdId" onChange={this.handleChange} value={this.state.name} required />
                    </div>

                    <button className='formButton'>Submit</button>
                </form>
            </div>
        );
    }
}
export default AddMovie;