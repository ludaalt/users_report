import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

import defaultTheme from '../const/defaultTheme';

const SearchForm = styled.form`
  display: flex;
  border-radius: 50px;
  border: 1px solid ${defaultTheme.palette.primary.light};
`;

const TextFieldWrapper = styled(TextField)`
  fieldset {
    border: none;
  }
`;

const SearchBar = ({ filterData }) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    filterData(event.target.value);
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <TextFieldWrapper onChange={handleChange} fullWidth variant="outlined" autoComplete="off" />

      <IconButton size="large" type="submit" aria-label="search">
        <SearchIcon color="secondary" />
      </IconButton>
    </SearchForm>
  );
};

export default SearchBar;
