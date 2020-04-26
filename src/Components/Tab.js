import React, { Component } from 'react';

export class Tab extends Component {
    addStyling = () => {
        if (this.props.tab.id == this.props.activeTab) {
            return { backgroundColor: 'white' }
        }
        else {
            return { backgroundColor: 'pink' }
        }
    }

    render() {
        return (
            <div className='tab'
                style={this.addStyling()}
                onClick={this.props.changeTab.bind(this, this.props.tab.id)}>

                <div className="navFont">{this.props.tab.title}</div>
            </div>
        );
    }
}
export default Tab;