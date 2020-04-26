import React, { Component } from 'react';
import './App.css';
import TabList from './Components/TabList';
import Body from './Components/Body';
import ScrollToTop from './Components/ScrollToTop';
import SimpleReactLightbox from 'simple-react-lightbox';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
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
