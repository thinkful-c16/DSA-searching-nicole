import React from 'react';

export default class Form extends React.Component {

  constructor(props) {
    //super allows us to access the properties in the state using this
    super(props);
    this.state = {
      dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      linResult: null,
      binResult: null,
    }

    this.linCount = 0;
    this.binCount = 0;
  }

  linSearch(array, value) {
    this.linCount=0;
    for (let i = 0; i < array.length; i++) {
      this.linCount++;

      if (array[i] === value) {
        const result = `${value} was found in dataset after ${this.linCount} tries`;
        this.setState({linResult: result});
        this.linCount=0;
        break;
      }
    }
    if (this.linCount===array.length){
      const result = `After ${this.linCount} tries item was not found`;
      this.setState({linResult: result});
    }
  };

  binSearch(array, value, start=0, end=array.length-1) {
    this.binCount++;
    if (start > end) console.log(-1);

    let index = Math.floor((start + end) / 2 );
    let item = array[index];

    if(item === value) {
      this.setState({binResult: `${value} was found in dataset after ${this.binCount} tries`});
    }

    else if(item < value) {
      const result = this.binSearch(array, value, index+1, end);
      this.setState({binResult: `${value} was found in dataset after ${this.binCount} tries`});
    }

    else if (item > value) {
      const result = this.binSearch(array, value, start, index-1);
      this.setState({binResult: `${value} was found in dataset after ${this.binCount} tries`});
    }
  }

  handleLinear(value) {
    this.linSearch(this.state.dataset, parseInt(value, 10));
    this.refs.userInput.value='';
  }

  handleBinary(value) {
    this.binSearch(this.state.dataset.sort(), parseInt(value, 10));
    this.refs.userInput.value='';
  }

  render() {
    return(
      <div>
        <form>
            <input 
            name="textInput"
            id="textInput"
            className="textArea"
            required
            ref="userInput"
            />
            <button 
            type="button" 
            name="submit" 
            id="linear-search" 
            className="button"
            onClick={() => this.handleLinear(this.refs.userInput.value)}
            >
              Linear Search
            </button>
            <button type="button" 
            name="submit" 
            id="binary-search" 
            className="button"
            onClick={() => this.handleBinary(this.refs.userInput.value)}
            >
              Binary Search
            </button>
        </form>
        <div>
          {this.state.linResult}
        </div>
        <div>
          {this.state.binResult}
        </div>
      </div>
    )
  }
}