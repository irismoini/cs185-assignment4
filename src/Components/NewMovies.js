
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
import { Searchbar } from 'react-native-paper';
//import { SearchBar } from 'react-native-elements';

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
            /*
            lists: {
                name: ""
            },
*/
            /*
            movies: {
                imbdId: "",
                poster: "",
                title: "",
                director: "",
                rating: "",
                inList: ""
            },
*/
            // Holds every single movie!
            allMovies: [],
            // Holds the indeces of movies that should be displayed
            selectedMovies: [],
            selectedMoviesSearch: [],
            // Is panel open?
            open: false,
            // Holds index of the movie currently selected.
            selectedPost: null,
            // List of wishlist.
            listOfMovies: [],
            //listSelected: "All",
            searchQuery: '',
            numberToLoad: 8,
            isVisible: true
        }
    }



    componentDidMount() {
        const itemsRef = firebase.database().ref('movies');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newMovies = []
            for (let item in items) {
                newMovies[item] = {
                    imbdId: items[item].imbdId,
                    poster: items[item].poster,
                    title: items[item].title,
                    director: items[item].director,
                    rating: items[item].rating,
                    lists: items[item].inList
                }
            }

            this.setState({
                allMovies: newMovies
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

        setTimeout(() => {
            this.setList("All");
            this._onChangeSearch("");
        }, 1000);

    }

    onOpenModal = key => {
        this.setState({
            open: true,
            selectedPost: key // When a post is clicked, mark it as selected
        });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onDelete = (key) => {
        this.setState({
            open: false,
            selectedPost: null, // When a post is clicked, mark it as selected
        });

        setTimeout(() => {
            let movieRef = firebase.database().ref('movies/' + key);
            movieRef.remove();
        }, 150);
    };

    onAddingToList = (selected) => {
        const item = this.state.allMovies[this.state.selectedPost];
        var valueId = this.state.selectedPost;

        firebase.database().ref('movies/' + valueId + '/inList').push(selected);

    }

    setList = (selectedList) => {

        var selectedMovies = []

        for (let key in this.state.allMovies) {
            let myList = this.state.allMovies[key].lists
            for (let [keys, value] of Object.entries(myList)) {
                if (value == selectedList) {
                    selectedMovies.push(key);
                }

            }
        }

        this.setState({
            selectedMovies: selectedMovies,
            numberToLoad: 8,
            isVisible: true
        });

    }


    renderModal = () => {
        // Check to see if there's a selected post. If so, render it.
        if (this.state.selectedPost !== null) {
            const item = this.state.allMovies[this.state.selectedPost];
            var valueId = this.state.selectedPost;

            //got all my Movie Categories
            var allMovieCategories = [];
            for (var i = 0; i < this.state.listOfMovies.length; i++) {
                allMovieCategories.push(this.state.listOfMovies[i].name);
            }

            //look through database to get my inList
            var inListOfMovie = [];

            const itemsRef = firebase.database().ref("movies/" + valueId + "/inList");
            itemsRef.on('value', (snapshot) => {
                let items = snapshot.val();
                for (let item in items) {
                    itemsRef.child(item).on("value", (valuesnapshot) => {
                        inListOfMovie.push(valuesnapshot.val());
                    });
                }
            });

            //subtract lists from each other
            var minusList = allMovieCategories.filter(n => !inListOfMovie.includes(n));

            let alertWhenSelected = () => alert('Movie Added To List');

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
                                defaultValue={"Add Movie To List"}
                                onSelect={alertWhenSelected}
                                data={minusList}
                                messages={{ emptyList: "This movie already exits in all current lists." }}
                                onChange={value => this.onAddingToList(value)}
                            />

                        </p>
                    </div>
                </div>
            );
        }
    }

    renderMovies = () => {

        var result = this.state.selectedMovies.filter((key) => {
            return this.state.selectedMoviesSearch.indexOf(key) > -1;
        });

        
        return (result.slice(0, this.state.numberToLoad).map((key) => {
            let item = this.state.allMovies[key];
            if (typeof item === 'undefined') {
                this.state.selectedMovies.pop(key);
                this.state.selectedMoviesSearch.pop(key);
            } else {
                return (
                    <div>
                        <div style={styles}
                            onClick={() => this.onOpenModal(key)} // Pass the id of the clicked post
                        >
                            <img src={item.poster} />
                        </div>

                        <Modal
                            open={this.state.open}
                            onClose={this.onCloseModal}
                            animationDuration = {0}>
                            <div>{this.renderModal()}</div>
                        </Modal>
                    </div>
                );
            }
        }));
    
    
    }

    _onChangeSearch = (query) => {
        //this.setState({ searchQuery: query });
        console.log(query);
        // Check all movies, see what matches, update selectedMovies

        var selectedMovies = []

        for (let key in this.state.allMovies) {
            let myTitle = this.state.allMovies[key].title

            if (myTitle.includes(query)) {
                selectedMovies.push(key);


            }
        }




        this.setState({
            selectedMoviesSearch: selectedMovies
        });

    }

    loadMoreMovies = () => {
        this.setState({
            numberToLoad: this.state.numberToLoad + 8
            
        });

        if (this.state.numberToLoad >= this.state.allMovies.length) {
            this.setState({
              isVisible: false
            });
          } else {
            this.setState({
              isVisible: true
            });
          }
        
    }

   

    render() {
        document.title = "Movies";


        return (


            <div>
                <div className="headerForPages">
                    <h1>Movies</h1>
                </div>

                <div className="displayC">
                    <div>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={value => this._onChangeSearch(value)}
                        />
                    </div>


                </div>

                <DropdownList
                    defaultValue={"All"}
                    data={this.state.listOfMovies.map((item) => {
                        return item.name
                    })}
                    onChange={value => this.setList(value)}
                />

                <div className="movieBody">
                    {this.renderMovies()}
                </div>


                {this.state.isVisible && (
                <div onClick={() => this.loadMoreMovies()}>
                    <div className="loadMoreButton">Load More Movies</div>
                </div>
                )}






            </div>

        );
    }
}
export default NewMovies;
