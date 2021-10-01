import SecondaryNavigation from './SecondaryNavigation';
import styled from 'styled-components';
import LeftHeader from './LeftHeader';

const HeaderStyle = styled.header`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,0.4);
  max-width: 140rem;
  margin: 0 auto;

  @media (min-width: 48rem) {
    padding: 1.5rem 2rem;
  }
`

const HeaderContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderStyle>
        <LeftHeader />
        <SecondaryNavigation /> 
      </HeaderStyle>
    </HeaderContainer>
  );
};

export default Header;