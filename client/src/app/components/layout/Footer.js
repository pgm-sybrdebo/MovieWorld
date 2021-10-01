import styled from 'styled-components'
import FooterNavigation from "./FooterNavigation";
import Legal from "./Legal";
import Socials from "./Socials";
import BottomFooter from './BottomFooter';


const TopFooterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 140rem;
  background-color: ${props => props.theme.secondaryColor};
`;

const Footer = () => {
  return (
    <footer>
      <TopFooterStyled>
        <FooterNavigation />
        <Legal />
        <Socials />
      </TopFooterStyled>
      <BottomFooter />
    </footer>

  );
};

export default Footer;