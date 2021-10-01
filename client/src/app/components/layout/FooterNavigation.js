import {
  Link
} from "react-router-dom";


import * as Routes from '../../routes';
import styled from 'styled-components';


const FooterNavigationContainer = styled.div`
  width: 100%;

  @media (min-width: 48rem) {
    width: 33.33%;
    max-width: 26rem;
  }
`;

const FooterNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  

  li {
    padding: 0.5rem;
  }

  a {
    position: relative;
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    margin-bottom: 0.5rem;
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
  }

`;


const FooterNavigation = () => {

  return (
    <FooterNavigationContainer>
      <nav>
        <FooterNavigationList >
          <li>
            <Link to={Routes.LANDING}>Home</Link>
          </li>
          <li>
            <Link to={Routes.MOVIES}>Movies</Link>
          </li>
          <li>
            <Link to={Routes.TV_SHOWS}>Tv-Shows</Link>
          </li>
        </FooterNavigationList>
      </nav>
    </FooterNavigationContainer>
  );
};

export default FooterNavigation;