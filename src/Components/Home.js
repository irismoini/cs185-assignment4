import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  autoplaySpeed: 1500,
  transitionSpeed: 900,
  enablePanzoom: false,
  showThumbnails: false,
  showDownloadButton: false,
};

export class Home extends Component {
  render() {
    return (
      <div>

        <div className="headerForPages">
          <h1>Hello World, Welcome!</h1>
        </div>

        <SRLWrapper options={options}>
          <div className="homeBody">

            <div>
              <img src={require('../images/profilepicture.jpg')} />
            </div>

            <div className="homeParagraph">
              <div className="homeParagraphIn">
                <p>
                  My name is Iris (she/her/hers) and I'm a third year CS major at UCSB.
                  I'm excited to be taking this course and to be learning as much as I
                  can about Human Computer Interaction. I don't have a lot of
                  experience designing user interfaces, but would love to learn more!
                  A little about me--I'm a WomxnHacks board member and am extremely
                  excited to be a part of a board that works toward creating a safe and
                  supportive environment for women to learn about and engage with
                  programming. I have a passion for helping others learn how to code,
                  especially those who have no experience with it, and am a peer mentor
                  for the CS lower division courses at UCSB. In my spare time I love
                  creating and admiring art, as well as listening to music. I like to
                  snowboard when I can and go to the beach. Mostly, I love meeting new
                  people and listening to different perspectives! :)
                </p>
              </div>
            </div>

          </div>
        </SRLWrapper>

      </div>

    );
  }
}
export default Home;