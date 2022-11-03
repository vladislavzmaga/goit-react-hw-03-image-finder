import PropTypes from 'prop-types';
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
    data: [],
    page: 1,
    startPage: 1,
    perPage: 12,
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
    const { page, perPage, startPage } = this.state;
    const { value } = this.props;
    if (prevProps.value !== value) {
      this.setState({
        data: [],
        page: 1,
        status: 'pending',
      });
      await fetchImages(value, startPage, perPage).then(result => {
        const respounse = result.data.hits;
        if (+respounse.length === +0 || value === '') {
          this.setState({ status: 'rejected' });
          return;
        }

        this.setState({ data: respounse, status: 'resolved', page: 1 });
        console.clear();
      });
    }

    if (prevState.page !== page) {
      await fetchImages(value, page, perPage).then(result => {
        const data = result.data.hits;
        this.setState(prevState => {
          return {
            data: [...prevState.data, ...data],
          };
        });
        console.clear();
      });
    }
    console.clear();
  }

  render() {
    const { data, status, perPage } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <SecondTitle>Enter a valid query name!!!</SecondTitle>;
    }
    if (status === 'resolved') {
      return (
        <div id="toup">
          <GalleryList>
            {data.map(item => (
              <ImageGalleryItem key={item.id} item={item} />
            ))}
          </GalleryList>

          {data.length >= perPage && <Button loadMore={this.addMore} />}
          {data.length > perPage && (
            <ToStartBtn href="#toup" type="button">
              to start
            </ToStartBtn>
          )}
        </div>
      );
    }
    if (status === 'idle') {
      return <StartTitle>Enter the name of the picture or photo!!!</StartTitle>;
    }
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
