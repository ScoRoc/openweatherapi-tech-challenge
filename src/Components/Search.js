import React, { Component } from 'react';

class Search extends Component {

  componentDidMount() {
    this.textInput.focus()
  }

  clear() {
    this.textInput.value = ''
  }

  render() {
    return (
      <div id='search-row'>
        <form id='form' onSubmit={e => this.props.onHandleSubmit(e)}>
          <i className="icons fas fa-search" onClick={e => this.props.onHandleSubmit(e)}></i>
          <input type='text'
            ref={el => {this.textInput = el}}
            onChange={this.props.handleChange}
            placeholder='Enter US City here...'
          />
          <i className="icons fas fa-times"
            onClick={() => {
              this.props.clearSearch();
              this.clear();
            }}
            ></i>
        </form>
      </div>
    )
  }
}

export default Search;
