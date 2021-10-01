import styled from 'styled-components';

import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

const SecondaryNavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (min-width: 48rem) {
    margin-left: 3rem;
  }

  li {
    margin-right: 1.5rem;
    &:last-Child {
      margin-right: 0;
    }
  }

  button {
    background-color: transparent;
    outline: none;
    border: 3px solid #dfe1ec;
    color: #dfe1ec;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 3px;
    min-width: 6rem;

    a {
      display: block;
      text-align-center;
    }
  }
`

const SignInButton = styled.div`
  background-color: #e52626;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  min-width: 6rem;

  a {
    color: #dfe1ec;
    display: block;
    text-align: center;
    text-decoration: none;
  }
`


const SecondaryNavigation = () => {
  const {currentUser, signOut} = useAuth();

  return (
    <nav>
      <SecondaryNavigationList>
        {!!currentUser ? 
          <>
            <li>
              <Link to={Routes.WATCH_LIST}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="27.64"><g data-name="Group 20"><path data-name="Icon metro-eye" d="M15.424 0A17.276 17.276 0 000 9.64a17.159 17.159 0 0030.849 0A17.276 17.276 0 0015.425 0zm7.605 5.113a14.668 14.668 0 014.5 4.528 14.668 14.668 0 01-4.5 4.528 14.135 14.135 0 01-15.21 0 14.668 14.668 0 01-4.5-4.528 14.668 14.668 0 014.5-4.528c.118-.075.237-.148.357-.22a7.712 7.712 0 1014.5 0q.18.107.357.22zm-7.605 1.635a2.892 2.892 0 11-2.895-2.892 2.892 2.892 0 012.895 2.892z" fill="#dfe1ec"/><g data-name="Icon feather-plus-circle" fill="none" stroke="#dfe1ec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path data-name="Path 9" d="M39 18.64a8 8 0 11-8-8 8 8 0 018 8z"/><path data-name="Path 10" d="M31 15.44v6.4"/><path data-name="Path 11" d="M27.8 18.64h6.4"/></g></g></svg></Link>
            </li>
            <li>
              <Link to={Routes.PROFILE}><svg xmlns="http://www.w3.org/2000/svg" width="26.29" height="33"><g data-name="user (1)"><g data-name="Group 19"><g data-name="Group 18" fill="#dfe1ec" stroke="#dfe1ec"><path data-name="Path 7" d="M19.877 15.963a9.68 9.68 0 01-1.477 1.5 10.6 10.6 0 015.339 9.2c0 2.124-4.654 3.788-10.594 3.788S2.55 28.786 2.55 26.662a10.6 10.6 0 015.339-9.2 9.683 9.683 0 01-1.477-1.5 12.647 12.647 0 00-5.913 10.7c0 1.363.746 3.263 4.3 4.572a25.058 25.058 0 008.343 1.266 25.058 25.058 0 008.343-1.266c3.556-1.309 4.3-3.209 4.3-4.572a12.647 12.647 0 00-5.908-10.699z"/><path data-name="Path 8" d="M13.145 17.314c3.985 0 7.054-3.852 7.054-8.407S17.128.5 13.145.5 6.091 4.352 6.091 8.907s3.07 8.407 7.054 8.407zm0-14.764c2.759 0 5 2.852 5 6.357s-2.245 6.357-5 6.357-5-2.852-5-6.357 2.241-6.357 5-6.357z"/></g></g></g></svg></Link>
            </li>
            <li>
              <button onClick={signOut}>Logout</button>
            </li>
          </>
          : <SignInButton><Link to={Routes.AUTH_SIGN_IN}>Sign In</Link></SignInButton>
          } 
      </SecondaryNavigationList>
    </nav>
  );
};

export default SecondaryNavigation;