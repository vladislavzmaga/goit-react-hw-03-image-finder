import React, { Component } from 'react';
// import { fetchImages } from './API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
  };

  handleSubmit = value => {
    this.setState({ value: value });
  };

  // searchImages = () => {
  //   fetchImages(this.state.value).then(respounse => {
  //     console.log(respounse);
  //   });
  // };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}
