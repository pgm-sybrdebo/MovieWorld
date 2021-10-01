import styled from 'styled-components';
import { useContext } from 'react';
import moon from '../../../assets/icons/moon.svg';
import { ThemeContext }  from '../../contexts/theme/ThemeContext'


const DarkModeSwitchStyle = styled.div`
  input {
    display: none;
  }
  
  label {
    display: inline-block;
    position: relative;
    height: 2rem;
    width: 3.5rem;
  }

  input:checked + div {
    background-color: #e52626;
    

    &:before {
      transform: translateX(1.6rem);
    }
  }

  div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 3px solid ${props => props.theme.secondaryColor};
    background-color: transparent;
    cursor: pointer;
    border-radius: 1rem;
    transition: all 0.1s ease-in-out;

    &:before {
      content: "";
      position: absolute;
      left: -0.2rem;
      bottom: -0.2rem;
      width: 1.6rem;
      height: 1.6rem;
      background-color: #dfe1ec;
      background-image: url(${moon});
      background-size: 1rem;
      background-repeat: no-repeat;
      background-position: center;
      border: 3px solid ${props => props.theme.secondaryColor};
      border-radius: 50%;
      transition: all 0.1s ease-in-out;
    }
  }
`;


const DarkModeSwitch = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const handleOnChange = () => {
    switchTheme((theme === 'dark' ? 'light' : 'dark' ));
  };

  return (
    <DarkModeSwitchStyle>
      <label>
        <input type="checkbox"  value={theme} onChange={handleOnChange} checked={(theme === 'dark' ? true : false) } />
        <div />
      </label>
    </DarkModeSwitchStyle>
  );
};

export default DarkModeSwitch;