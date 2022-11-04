import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
    page: 1,
  };

  handleSubmit = (value, page) => {
    this.setState({ value, page });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery value={this.state.value} page={this.state.page} />
      </div>
    );
  }
}
