import React, { Component } from 'react';
import Form from './Form.js';
import Posts from './Posts.js';
import { motion } from "framer-motion";


export class GuestBook extends Component {
  render() {
    document.title = "Guest Book";
    return (
      <div>

        <div className="headerForPages">
          <h1>Guest Book</h1>
        </div>

        <div className="guestBookBody">
          <motion.div animate={{ y: 50 }} transition={{ duration: 1.0 }}>
            <Form />
          </motion.div>
          <Posts />
        </div>

      </div>
    );
  }
}
export default GuestBook;