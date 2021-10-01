import {
  Link
} from "react-router-dom";

import {useState} from 'react';

import * as Routes from '../../routes';
import styled from 'styled-components';
import SearchBar from "./SearchBar";



const Logo = styled.svg`
  width: 3rem;
  fill: ${props => props.theme.secondaryColor};

  @media (min-width: 48rem) {
    fill: #dfe1ec;
  }
`;

const LeftHeaderStyle = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overscroll-behavior: contain;
  padding: 1rem;
  padding-top: 6rem;

  background-color: ${props => props.theme.primaryColor};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
  transition: transform 0.3s ease-in-out;

  @media(min-width: 48rem) {
    display: flex;
    align-items: center;
    transform: none;
    position: relative;
    padding: 0rem;
    background-color:transparent;
    height: calc(100% - 10rem);
  }
`;


const MainNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;

  li {
    margin-bottom: 1.5rem;

    &:first-child a:hover::before {
      width: 0;
    }
  }

  a {
    position: relative;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.secondaryColor};
    text-decoration: none; 
    transition: all 0.2s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 0;
      bottom: -0.2rem;
      background: #e52626;
      height: 0.2rem;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      color: #e52626;

      &::before {
        width: 100%;
      }
    }

    path {
      transition: all 0.2s ease-in-out;
    }

    &:hover path {
      fill: #e52626;
    }

  }

  @media (min-width: 48rem) {
    display:flex;
    align-items: center;
    flex-direction: row;

    li {
      margin-left: 1.5rem;
      margin-bottom: 0;
      &:first-Child {
        margin-left: 0;
      }

      a {
        color: #dfe1ec; 
      }
    }
  }
`

const NavButton = styled.button`
  position: ${({ open }) => open ? 'fixed'  : 'static'};
  background-color: transparent;
  outline: none;
  border: none;
  padding: none;
  margin-left: 1rem;
  z-index: 10000;
  cursor: pointer;

  span {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? props => props.theme.secondaryColor : '#dfe1ec'};
    border-radius: 10px;
    transition: all 0.4s linear;
    position: relative;
    margin-bottom: 0.3rem;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg) translateY(0.8rem)'  : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(2rem)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translateY(-0.8rem)' : 'rotate(0)'};
    }
  }

  @media (min-width: 48rem) {
    display: none;
  }
`




const LeftHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
       <NavButton open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </NavButton> 
      <LeftHeaderStyle open={open}>
        <SearchBar open={open}/>
        <nav>
          <MainNavigationList open={open}>
            <li>
              <Link to={Routes.LANDING}>
                <Logo open={open} id="Solid" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464 464v16h16v-16h-8z"/><circle cx="80" cy="312" r="16"/><circle cx="115" cy="227" r="16"/><path d="m200 480c92.636 0 168-75.364 168-168s-75.364-168-168-168-168 75.364-168 168 75.364 168 168 168zm84.93-51.147a32 32 0 1 1 32-32 32.037 32.037 0 0 1 -32 32zm35.07-148.853a32 32 0 1 1 -32 32 32.036 32.036 0 0 1 32-32zm-35.14-85a32 32 0 1 1 -32 32 32.036 32.036 0 0 1 32-32zm-84.86-35a32 32 0 1 1 -32 32 32.036 32.036 0 0 1 32-32zm24 152a24 24 0 1 1 -24-24 24.027 24.027 0 0 1 24 24zm-24 88a32 32 0 1 1 -32 32 32.036 32.036 0 0 1 32-32zm-84.93 28.853a32 32 0 1 1 32-32 32.036 32.036 0 0 1 -32 32zm-.07-233.853a32 32 0 1 1 -32 32 32.036 32.036 0 0 1 32-32zm-67 117a32 32 0 1 1 32 32 32.036 32.036 0 0 1 -32-32z"/><circle cx="200" cy="432" r="16"/><circle cx="115.07" cy="396.853" r="16"/><circle cx="200" cy="192" r="16"/><circle cx="200" cy="312" r="8"/><path d="m368 387.016a184.9 184.9 0 0 1 -44.193 60.984h44.193z"/><path d="m368 464h16v16h-16z"/><path d="m400 464h16v16h-16z"/><path d="m336 464h16v16h-16z"/><path d="m408 32a72 72 0 1 0 72 72 72.081 72.081 0 0 0 -72-72zm43.969 78.946-56 32a8 8 0 0 1 -11.969-6.946v-64a8 8 0 0 1 11.969-6.946l56 32a8 8 0 0 1 0 13.892z"/><path d="m304 463.7a183.92 183.92 0 0 1 -28.984 16.3h44.984v-16h-16z"/><path d="m400 122.214 31.875-18.214-31.875-18.214z"/><path d="m384 360h80v88h-80z"/><circle cx="284.93" cy="396.853" r="16"/><circle cx="320" cy="312" r="16"/><path d="m400 328h-16.7q-.7 8.1-2.087 16h18.787z"/><circle cx="284.86" cy="227" r="16"/><path d="m432 464h16v16h-16z"/><path d="m416 328h24v16h-24z"/><path d="m480 344v-16h-24v16h16z"/></Logo>
              </Link>
            </li>
            <li>
              <Link to={Routes.MOVIES}>Movies</Link>
            </li>
            <li>
              <Link to={Routes.TV_SHOWS}>Tv-Shows</Link>
            </li>
          </MainNavigationList> 
        </nav>
      </LeftHeaderStyle> 
    </>
  );
};

export default LeftHeader;