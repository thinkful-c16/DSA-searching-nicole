import React from 'react';
import {connect} from 'react-redux';

export default class Form extends React.Component {

  constructor(props) {
    //super allows us to access the properties in the state using this
    super(props);
    this.state = {
      textInput: this.props.textInput
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      textInput: target.value
    })
    console.log(target.value);
  }
  
  // onSubmit(event) {
  //   event.preventDefault();
  //   if(this.props.view === '')
  // }

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