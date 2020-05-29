
import React, { Component } from 'react';
import Home from './Home';
import LifeInColor from './LifeInColor';
import RecoveryInPoetry from './RecoveryInPoetry';
import MemoriesInMusic from './MemoriesInMusic';
import GuestBook from './GuestBook';
import Movies from './Movies';
import AddMovie from './AddMovie';
import CreateList from './CreateList';
import NewMovies from './NewMovies';

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if (activeTab == 1) {
            return <Home />
        } else if (activeTab == 2) {
            return <LifeInColor />
        } else if (activeTab == 3) {
            return <RecoveryInPoetry />
        }else if(activeTab==4){
            return <MemoriesInMusic />
        }else if(activeTab==5){
            return <GuestBook/>
        }else if(activeTab==6){
            return <NewMovies/>
        }else if(activeTab==7){
            return <AddMovie/>
        }else{
            return <CreateList/>
        }

    
    }
    render() {
        return (this.displayContent());
    }
}
export default Body;