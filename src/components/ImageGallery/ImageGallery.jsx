import { fetchImages } from 'components/API/API';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    data: null,
    page: 1,
    status: 'idle',
  };

  search = () => {};

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
        console.log(data.length);
        if (+data.length === +0 || this.props.value === '') {
          this.setState({ status: 'rejected' });
          return;
        }

        this.setState({ data, status: 'resolved' });
      });
    }

    if (prevState.page !== this.state.page) {
      console.log(this.state.page);
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
      return <h1>vse propalo</h1>;
    }
    if (status === 'resolved') {
      return (
        <ul class="gallery">
          {data.map(item => (
            <ImageGalleryItem key={item.id} item={item} />
          ))}
          <button type="button" onClick={this.addMore}>
            search more
          </button>
        </ul>
      );
    }
    if (status === 'idle') {
      return (
        <div>
          <p>zaebalo nahuy</p>
        </div>
      );
    }
  }
}
