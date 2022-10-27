import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  getInputValue = evt => {
    this.setState({ value: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const value = this.state.value;
    this.props.onSubmit(value);
    this.reset();
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            name="name"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.getInputValue}
          />
        </form>
      </header>
    );
  }
}
