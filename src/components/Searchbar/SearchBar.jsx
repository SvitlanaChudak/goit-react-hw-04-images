import React, { Component } from 'react';
import { Header, SearchForm, FormButton, Input } from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';
import {toast, Toaster} from 'react-hot-toast';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  onChange = event => {
    this.setState({
      searchQuery: event.currentTarget.value.toLowerCase(),
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.error('Please enter something');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      
      <Header >
        <Toaster />
   <SearchForm onSubmit={this.onSubmit}>
          <FormButton type="submit">
            <FcSearch size={25}/>
    </FormButton>

    <Input
      type="text"
      name="searchQuery"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.searchQuery}
      onChange={this.onChange}
    />
  </SearchForm>
      </Header>
      
    );
  }
}
