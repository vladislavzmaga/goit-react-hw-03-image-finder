import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <GalleryItem onClick={this.openModal}>
        <GalleryImage src={item.webformatURL} alt={item.user} loading="lazy" />
        {isModalOpen && <Modal item={item} close={this.closeModal} />}
      </GalleryItem>
    );
  }
}
