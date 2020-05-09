import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";

const options = {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    enablePanzoom: false,
    showThumbnails: false,
    showDownloadButton: false,
  };

export class RecoveryInPoetry extends Component {
    render() {
        document.title = "Recovery In Poetry";
        return (
            <div>
                <div className="headerForPages">
                    <h1>Recovery in Poetry</h1>
                </div>
                
                <SRLWrapper options={options}>
                <div className="poetryBody">

                    <div className="poetrySet">

                        <div className="centeringPoetryImg">
                            <img src={require('../images/p2.jpg')} />
                        </div>

                        <div className="centeringPoetryWords">
                            <h12>Eight Types of Rest</h12>
                            <p>1.) time away </p>
                            <p>2.) permission to not be helpful</p>
                            <p>3.) something "unproductive"</p>
                            <p>4.) connection to art and nature</p>
                            <p>5.) solitude to recharge</p>
                            <p>6.) stillness to decompress</p>
                            <p>7.) safe space </p>
                            <p> 8.) alone time at home </p>
                        </div>

                    </div>


                    <div className="poetrySet">

                        <div className="centeringPoetryImg">
                            <img src={require('../images/l1.jpg')} />
                        </div>

                        <div className="line">
                            <div class="centeringPoetryWords">
                                <p> "I think it is brave that you get up in the morning when your heartaches and your
                                life is messy and you do not feel like being soft for the world. I think it is brave
                                that you continue to love, and express, and open your soul, despite the way you were
                                treated in the past. I think that it is brave that you keep going, that you keep believing
                                in something more, something bigger, even when you may not know what you are hoping for. I
                                think it is brave that you fight, I think it is brave that you choose, every single day, to
                                move forward-- because that is what makes you strong-- that is what makes you strong."
                                ~Bianca Sparacino</p>
                            </div>
                        </div>

                    </div>


                    <div className="poetrySet">

                        <div class="centeringPoetryImg">
                            <img src={require('../images/lan5.jpg')} />
                        </div>

                        <div className="centeringPoetryWords">
                            <h12>Self Growth</h12>
                            <p>1.) keeping your promises</p>
                            <p>2.) maintaining boundaries</p>
                            <p>3.) stepping out of your comfort zone</p>
                            <p>4.) being present</p>
                            <p>5.) being authentic</p>
                            <p>6.) letting go of other's expectations</p>
                            <p>7.) seeking deep connection</p>
                            <p>8.) respecting your body's needs</p>
                        </div>

                    </div>

                </div>
                </SRLWrapper>

            </div>
        );
    }
}

export default RecoveryInPoetry;