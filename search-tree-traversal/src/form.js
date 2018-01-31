import React from 'react';
import {connect} from 'react-redux';

export class Form extends React.Component {
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
      </form>
    )
}