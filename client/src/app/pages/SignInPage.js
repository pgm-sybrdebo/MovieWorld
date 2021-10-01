import styled from 'styled-components';

import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { useAuth } from '../contexts/firebase/auth.context';
import * as Routes from '../routes';
import { Link } from 'react-router-dom';

const SignInContainer = styled.div`
  background: url('/images/homeHero.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
`;

const FormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  h1 {
    color: #dfe1ec;
    text-align: left;
    padding: 2rem;
    padding-bottom: 0;
  }
`;


const FormWrapper = styled.div`
  height: 35rem;
  width: 20rem;
  border-radius: 3px;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  form {
    padding: 0 2rem;
  }

  a {
    display: block;
    color: #e52626;
    padding-top: 0.5rem;

  }
`;

const FormContent = styled.div`
  padding-bottom: 1.5rem;

  label {
    padding: 1rem 0;
    display: block;
  }

  input {
    display: block;
    width: 100%;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    outline: none; 
    border: 3px solid #e52626;
    padding: 0.5rem 1rem;
  }

  small {
    margin-top: 1rem;
    display: block;
  }
`;

const PrimButton = styled.div`

  margin: 1.5rem 0;

  @media (min-width: 52rem) {
    display: block;
    max-width: 16rem;
    margin: 1.5rem auto;
  }  

  button {
    width: 100%;
    color: #dfe1ec;
    outline: none;
    border: 3px solid #e52626;
    background-color: #e52626;
    transition: all 0.2s ease-in-out;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1rem;

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.secondaryColor}
    }
  }
`;


const SignInPage = ({children}) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: '',
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.goBack();
    }    
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <SignInContainer>
      <FormContainer>
        <FormWrapper>
          <h1>Sign in</h1>
          {!!currentUser === false &&
          <form onSubmit={(ev) => handleSubmit(ev)}>
            <FormContent>
              <label htmlFor="txtEmail">Email address</label>
              <input type="email" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" placeholder="Your email" onChange={handleInputChange} value={signInForm.txtEmail} />
              <small id="emailHelp">We'll never share your email with anyone else.</small>
            </FormContent>
            <FormContent>
              <label htmlFor="txtPassword">Password</label>
              <input type="password" id="txtPassword" placeholder="Your password" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
            </FormContent>
            <p>Not a member?</p>
            <Link to={Routes.AUTH_REGISTRATION}>
              Register here
            </Link>
            <PrimButton>
              <button type="submit">Sign In</button>
            </PrimButton>
          </form>

          }
          {!!currentUser === true && 
            <div>
              <img src={currentUser.photoURL} alt={currentUser.email} />
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          }
        </FormWrapper>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignInPage;