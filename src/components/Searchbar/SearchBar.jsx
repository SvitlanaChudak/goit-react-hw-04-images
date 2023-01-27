import { useState } from 'react';
import { Header, SearchForm, FormButton, Input } from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';
import {toast, Toaster} from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Please enter something');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

    return (
      <Header >
        <Toaster />
   <SearchForm onSubmit={handleSubmit}>
          <FormButton type="submit">
            <FcSearch size={25}/>
    </FormButton>

    <Input
      type="text"
      name="searchQuery"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={searchQuery}
      onChange={handleChange}
    />
  </SearchForm>
      </Header>
    );
  }

