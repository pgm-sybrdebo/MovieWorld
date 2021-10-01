import styled from 'styled-components';
import { useState } from 'react';
import * as Routes from '../../routes';
import { Link } from 'react-router-dom';

const SearchBarStyle = styled.form`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-bottom: 2rem;  

  @media (min-width: 48rem) {
    order: 2;
    padding-bottom: 0;
  }

  input {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    outline: none;
    border: 3px solid ${({ open }) => open ? props => props.theme.secondaryColor : '#dfe1ec'};
    color: ${({ open }) => open ? props => props.theme.secondaryColor : '#dfe1ec'};
    width: 100%;

    &::placeholder {
      color: ${({ open }) => open ? props => props.theme.secondaryColor : '#dfe1ec'};
    }

    @media (min-width: 48rem) {
      width: 10rem;
    }
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
    margin-left: 0.5rem;
    cursor: pointer;


    path {
      transition: all 0.2s ease-in-out;
      fill: ${({ open }) => open ? props => props.theme.secondaryColor : '#dfe1ec'};
    }

    &:hover path {
      fill: #e52626;
    }
  }

`


const SearchBar = ({open}) => {

  const [input, setInput] = useState('');

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <SearchBarStyle open={open} action="">
      <label >
        <input type="search" placeholder="Search ..." onChange={handleOnChange} value={input}/>
      </label>
      <Link to={Routes.SEARCH.replace(':query', input)}>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="31.995" height="32" viewBox="0 0 31.995 32">
          <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M31.559,27.666l-6.231-6.231A1.5,1.5,0,0,0,24.266,21H23.248A12.993,12.993,0,1,0,21,23.248v1.019a1.5,1.5,0,0,0,.437,1.062l6.231,6.231a1.494,1.494,0,0,0,2.119,0l1.769-1.769a1.507,1.507,0,0,0,.006-2.125ZM13,21a8,8,0,1,1,8-8A7.995,7.995,0,0,1,13,21Z" fill="#dfe1ec"/>
        </svg> 
      </button></Link>
    </SearchBarStyle>
  );
};

export default SearchBar;
