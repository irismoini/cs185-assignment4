
import React, { Component } from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import ScrollToTop from "./ScrollToTop";

const lalaLand=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt3783958");
const crazyRichAsians=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt3104988");
const bohemianRhapsody=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt1727824");
const exMachina=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt0470752");
const ladyBird=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt4925292");
const easyA=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt1282140");
const princessMononoke=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt0119698");
const lettersToJuliet=axios.get("https://www.omdbapi.com/?apikey=36739a38&i=tt0892318");


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

export class Movies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movieOne: [],
      movieTwo: [],
      movieThree: [],
      movieFour: [],
      movieFive: [],
      movieSix: [],
      movieSeven: [],
      movieEight: [],
      movies: []
    }
  }
  
  componentDidMount() {
    axios.all([lalaLand, crazyRichAsians, bohemianRhapsody, exMachina, ladyBird, easyA, princessMononoke, lettersToJuliet]).then(axios.spread((...movies) => {
      this.setState({
        movieOne: [movies[0].data.Poster, movies[0].data.Title, movies[0].data.Director, movies[0].data.imdbRating,],
        movieTwo: [movies[1].data.Poster, movies[1].data.Title, movies[1].data.Director, movies[1].data.imdbRating],
        movieThree: [movies[2].data.Poster, movies[2].data.Title, movies[2].data.Director, movies[2].data.imdbRating],
        movieFour: [movies[3].data.Poster, movies[3].data.Title, movies[3].data.Director, movies[3].data.imdbRating],
        movieFive: [movies[4].data.Poster, movies[4].data.Title, movies[4].data.Director, movies[4].data.imdbRating],
        movieSix: [movies[5].data.Poster, movies[5].data.Title, movies[5].data.Director, movies[5].data.imdbRating],
        movieSeven: [movies[6].data.Poster, movies[6].data.Title, movies[6].data.Director, movies[6].data.imdbRating],
        movieEight: [movies[7].data.Poster, movies[7].data.Title, movies[7].data.Director, movies[7].data.imdbRating],
        movies: movies
      })
      console.log(this.state.movies);
    })
    )
  }
  
  render() {
    document.title = "Favorite Movies";
    return (
      <div>

        <div className="headerForPages">
          <h1>Favorite Movies</h1>
        </div>
      
        <SRLWrapper options={options}>
          <div className="movieBody" >

            <div >
              <a href={this.state.movieOne[0]} data-attribute="SRL"><img src={this.state.movieOne[0]} alt={["Title: " + this.state.movieOne[1] + ", Director: " + this.state.movieOne[2] + ", Rating: " + this.state.movieOne[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieTwo[0]} data-attribute="SRL"><img src={this.state.movieTwo[0]} alt={["Title: " + this.state.movieTwo[1] + ", Director: " + this.state.movieTwo[2] + ", Rating: " + this.state.movieTwo[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieThree[0]} data-attribute="SRL"><img src={this.state.movieThree[0]} alt={["Title: " + this.state.movieThree[1] + ", Director: " + this.state.movieThree[2] + ", Rating: " + this.state.movieThree[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieFour[0]} data-attribute="SRL"><img src={this.state.movieFour[0]} alt={["Title: " + this.state.movieFour[1] + ", Director: " + this.state.movieFour[2] + ", Rating: " + this.state.movieFour[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieFive[0]} data-attribute="SRL"><img src={this.state.movieFive[0]} alt={["Title: " + this.state.movieFive[1] + ", Director: " + this.state.movieFive[2] + ", Rating: " + this.state.movieFive[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieSix[0]} data-attribute="SRL"><img src={this.state.movieSix[0]} alt={["Title: " + this.state.movieSix[1] + ", Director: " + this.state.movieSix[2] + ", Rating: " + this.state.movieSix[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieSeven[0]} data-attribute="SRL"><img src={this.state.movieSeven[0]} alt={["Title: " + this.state.movieSeven[1] + ", Director: " + this.state.movieSeven[2] + ", Rating: " + this.state.movieSeven[3]]} /></a>
            </div>

            <div>
              <a href={this.state.movieEight[0]} data-attribute="SRL"><img src={this.state.movieEight[0]} alt={["Title: " + this.state.movieEight[1] + ", Director: " + this.state.movieEight[2] + ", Rating: " + this.state.movieEight[3]]} /></a>
            </div>

          </div>
        </SRLWrapper>

      </div>
    );
  }
}
export default Movies;