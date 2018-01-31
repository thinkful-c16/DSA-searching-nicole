import React from 'react';
import {connect} from 'react-redux';

export default class Form extends React.Component {
  handleInputChange(event) {
    const target = event.target;
  }

  render() {
    return(
      <form onSubmit={event => this.onSubmit(event)}>
        <div>
          <textarea 
          onChange={this.handleInputChange}
          name="textInput"
          id="textInput"
          className="textArea"
          required
          >
          </textarea>
        </div>
        <div>
          <button type="submit" name="submit" id="linear-search" className="button">
            Linear Search
          </button>
        </div>
        <div>
          <button type="submit" name="submit" id="binary-search" className="button">
            Binary Search
          </button>
        </div>
      </form>
    )
  }
}