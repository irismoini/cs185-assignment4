import React, { Component } from 'react';
import Home from './Home';
import LifeInColor from './LifeInColor';
import RecoveryInPoetry from './RecoveryInPoetry';
import MemoriesInMusic from './MemoriesInMusic';

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if (activeTab == 1) {
            return <Home />
        } else if (activeTab == 2) {
            return <LifeInColor />
        } else if (activeTab == 3) {
            return <RecoveryInPoetry />
        } else {
            return <MemoriesInMusic />
        }
    }
    render() {
        return (this.displayContent());
    }
}
export default Body;