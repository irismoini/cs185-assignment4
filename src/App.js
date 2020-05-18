import React, { Component, useEffect } from 'react';
import './App.css';
import TabList from './Components/TabList';
import Body from './Components/Body';
import ScrollToTop from './Components/ScrollToTop';
import SimpleReactLightbox from 'simple-react-lightbox';
import config from './config.js'
//get a reference to firebase
const firebase = require('firebase')



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      data:{},
  
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }


  componentDidMount(){
    firebase.initializeApp(config)
    let ref = firebase.database().ref('data')
    ref.on('value', snapshot => {
      const data = snapshot.val()
      this.setState({data: data})
    })
  }

  componentDidUpdate(prevProps, prevState, snapshoyt){
	//only call set state here if it is wrapped in a condition
	//if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
	if(this.state.shouldUpdate != prevState.shouldUpdate){
    //same code as above to retrieve the data 
    firebase.initializeApp(config)
    let ref = firebase.database().ref('data')
    ref.on('value', snapshot => {
      const data = snapshot.val()
      this.setState({data: data}) 
    })
  }
}

  render() {
    const tabs = [
      {
        id: 1,
        title: "Home"
      },
      {
        id: 2,
        title: "Life in Color"
      },
      {
        id: 3,
        title: "Recovery in Poetry"
      },
      {
        id: 4,
        title: "Memories in Music"
      },
      {
        id: 5,
        title: "Guest Book"
      },
      {
        id: 6,
        title: "Favorite Movies"
      }
    ]

    return (

      <body className="body">
        <div className="nav-bar">

          <TabList tabs={tabs}
            changeTab={this.changeTab}
            activeTab={this.state.activeTab} />
        </div>
        <SimpleReactLightbox>
          <div className="main-body">
            <Body activeTab={this.state.activeTab} />
          </div>
        </SimpleReactLightbox>

        <ScrollToTop />
      </body>

    );
  }
}

export default App;
