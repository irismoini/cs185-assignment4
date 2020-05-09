import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";

const options = {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    enablePanzoom: false,
    showThumbnails: false,
    showDownloadButton: false,
};

export class LifeInColor extends Component {
    render() {
        document.title = "Life In Color";
        return (
            <div>
                <div className="rearrangeLife">

                    <div className="headerForColor">
                        <h2>Life in Color</h2>
                    </div>

                    <div className="textOnColor">
                        <p>Look at the stars. Look how they shine for you. And everything you do. They were all yellow. I came along
                        I wrote a song for you.
                        And all the things you do.
                        And it was called "Yellow." -Coldplay</p>
                    </div>

                </div>
                <SRLWrapper options={options}>

                    <div className="parent">
                        <div class="child">
                            <div class="center">
                                <img src={require('../images/f1.jpg')} />
                            </div>
                        </div>
                    </div>

                    <div class="child">
                        <div class="center">
                            <img src={require('../images/yellow6.jpg')} />
                        </div>
                    </div>


                    <div class="child">
                        <div class="center">
                            <img src={require('../images/f5.jpg')} />
                        </div>
                    </div>

                    <div class="child">
                        <div class="center">
                            <img src={require('../images/yellow4.jpg')} />
                        </div>
                    </div>

                    <div class="child">
                        <div class="center">
                            <img src={require('../images/yellow10.jpg')} />
                        </div>
                    </div>

                    <div class="child">
                        <div class="center">
                            <img src={require('../images/f4.jpg')} />
                        </div>
                    </div>

                    <div class="child">
                        <div class="center">
                            <img src={require('../images/yellow3.jpg')} />
                        </div>
                    </div>

                    <div class="child">
                        <div class="center">
                            <img src={require('../images/yellow9.jpg')} />
                        </div>
                    </div>
                </SRLWrapper>

            </div>
        );
    }
}

export default LifeInColor;