import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  SearchbarButton,
  SearchbarButtonText,
  SearchbarForm,
  SearchbarHeader,
  SearchbarInput,
} from './Searchbar.styled';

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
      <SearchbarHeader>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarButton type="submit">
            <SearchbarButtonText>Search</SearchbarButtonText>
          </SearchbarButton>

          <SearchbarInput
            type="text"
            name="name"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.getInputValue}
          />
        </SearchbarForm>
      </SearchbarHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
