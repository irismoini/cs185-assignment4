
import React, { Component } from 'react';
import config from '../config.js';
import { SRLWrapper } from "simple-react-lightbox";
import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Body from './Body.js';
import ScrollToTop from './ScrollToTop';
import { ThemeConsumer } from 'styled-components';

const firebase = require('firebase');

let listOfMovieNames = [];

const options = {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    buttons: {
        showDownloadButton: false,
        showAutoplayButton: false,
        showNextButton: false,
        showPrevButton: false,
    },
    thumbnails: {
        showThumbnails: false
    },
};

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

export class NewMovies extends Component {

    constructor() {
        super();
        this.state = {
            lists: {
                name: ""
            },

            movies: {
                imbdId: "",
                poster: "",
                title: "",
                director: "",
                rating: "",
                inList: ""
            },

            items: [],
            open: false,
            selectedPost: null,
            listOfMovies: [],
            listSelected: "All",
            deletedPost: null
        }
    }

    componentDidMount() {
      
        const itemsRef = firebase.database().ref('movies');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    imbdId: items[item].imbdId,
                    poster: items[item].poster,
                    title: items[item].title,
                    director: items[item].director,
                    rating: items[item].rating,
                });
            }

            this.setState({
                items: newState
            });

        });

        const itemsref = firebase.database().ref('lists');
        itemsref.on('value', (snapshot) => {
            let listOfMovies = snapshot.val();
            let thenewState = [];
            for (let item in listOfMovies) {
                thenewState.push({
                    id: item,
                    name: listOfMovies[item].name,
                });
            }

            for (let movieKVP in listOfMovies) {
                listOfMovieNames.push(
                    movieKVP.name

                );
            }

            this.setState({
                listOfMovies: thenewState
            });
        });
    }

    onOpenModal = i => {
        this.setState({
            open: true,
            selectedPost: i // When a post is clicked, mark it as selected
        });


    };

    onCloseModal = () => {
        alert("FDJKFJDKLSF");
        this.setState({ open: false });
    };
    
    onDelete = (valueId) => {

        this.setState({
            open: false,
            selectedPost: null, // When a post is clicked, mark it as selected
            deletedPost: valueId
        });

        setTimeout(() => {
            let movieRef = firebase.database().ref('movies/' + valueId);
            movieRef.remove();
        },1000);

      
    };


    renderModal = () => {
        // Check to see if there's a selected post. If so, render it.
        if (this.state.selectedPost !== null) {
            const item = this.state.items[this.state.selectedPost];
            var valueId = item.id;
            return (
                <div
                    style={{ width: 400, backgroundColor: "white" }}
                >

                    <img src={item.poster} />
                    <p>Title: {item.title}</p>
                    <p>Director: {item.director}</p>
                    <p>Rating: {item.rating}</p>

                    <div onClick={() => this.onDelete(valueId)}>
                        <button>Delete Movie</button>
                    </div>

                    <div>
                        <p>
                            <DropdownList
                                defaultValue={"All"}
                                data={this.state.listOfMovies.map((item) => {
                                    return item.name
                                })}
                                listSelected={this.state.listSelected}
                                onChange={listSelected => this.setState({ listSelected })}
                            />

                        </p>
                    </div>
                </div>
            );
        }
    }

    render() {
        document.title = "Movies";

        const { open } = this.state;

        return (

            <div>
                <div className="headerForPages">
                    <h1>Movies</h1>
                </div>

                <DropdownList
                    defaultValue={"All"}
                    data={this.state.listOfMovies.map((item) => {
                        return item.name
                    })}
                />

                <div className="movieBody">
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="scrollForMovies">

                                <div style={styles} key={item.id}
                                    onClick={() => this.onOpenModal(i)} // Pass the id of the clicked post
                                >
                                    <img src={item.poster} />
                                </div>

                                <Modal 
                                open={open} 
                                onClose={this.onCloseModal} >

                                    <div>{this.renderModal()}</div>

                                </Modal>

                            </div>
                        )
                    })}

                </div>

            </div>

        );
    }
}
export default NewMovies;

