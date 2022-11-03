import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
  };

  handleSubmit = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}
