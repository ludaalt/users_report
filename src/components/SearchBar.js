import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  border-radius: 50px;
  border: 1px solid lightgray;
`;

const TextFieldWrapper = styled(TextField)`
  fieldset {
    border: none;
  }
`;

const SearchBar = () => {
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <SearchForm onSubmit={(e) => onSubmit}>
      <TextFieldWrapper fullWidth variant="outlined" />
      <Button type="submit" size="small">
        <SearchIcon color="secondary" />
      </Button>
    </SearchForm>
  );
};

export default SearchBar;
