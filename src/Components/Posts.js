import React, { Component } from 'react';
import config from '../config.js';
import { motion } from "framer-motion";

const firebase = require('firebase');

export class Posts extends Component {

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
            items: [],
        }

    }


    componentDidMount() {
        const itemsRef = firebase.database().ref('data');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    name: items[item].name,
                    description: items[item].description,
                    message: items[item].message,
                    visibility: items[item].visibility,
                    email: items[item].email,
                    startedAt: items[item].startedAt
                });
            }
            this.setState({
                items: newState
            });
        });

    }

    render() {

        return (      
                <div className="scroll">
                    <ul className="postElements">

                        {this.state.items.map((item) => {
                            if(item.visibility=="Yes"){
                                return null;
                            }
                            return (
                                <motion.div animate={{ x: -40 }} transition={{duration: 1.0}}>
                                <div className="postStyle">
                                    <p>{item.startedAt}</p>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.message}</p>
                                </div>
                                </motion.div>
                               
                               

                            )
                        })}
                    </ul>
                </div>
        );
    }
}
export default Posts;