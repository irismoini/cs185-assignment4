import React, { Component } from 'react';
import Form from './Form.js';

export class GuestBook extends Component {
  render() {
    document.title = "Guest Book";
    return (

      <div>

        <div className="headerForPages">
          <h1>Guest Book</h1>
        </div>

        <Form/>

        
      </div>

    );
  }
}
export default GuestBook;