import { fetchImages } from 'components/API/API';
import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import React, { Component } from 'react';
import {
  StartTitle,
  SecondTitle,
  GalleryList,
  ToStartBtn,
} from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    data: null,
    page: 1,
    status: 'idle',
  };

  addMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      await fetchImages(this.props.value, page).then(result => {
        const data = result.data.hits;
        if (+data.length === +0 || this.props.value === '') {
          this.setState({ status: 'rejected' });
          return;
        }

        this.setState({ data, status: 'resolved' });
      });
    }

    if (prevState.page !== this.state.page) {
      await fetchImages(this.props.value, page).then(result => {
        const data = result.data.hits;
        this.setState(prevState => {
          return {
            data: [...prevState.data, ...data],
          };
        });
      });
    }
  }

  render() {
    const { data, status } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <SecondTitle>Enter a valid query name!!!</SecondTitle>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p id="toup"></p>
          <GalleryList>
            {data.map(item => (
              <ImageGalleryItem key={item.id} item={item} />
            ))}
          </GalleryList>
          <Button loadMore={this.addMore} />
          <ToStartBtn href="#toup" type="button">
            to start
          </ToStartBtn>
        </div>
      );
    }
    if (status === 'idle') {
      return <StartTitle>Enter the name of the picture or photo!!!</StartTitle>;
    }
  }
}
