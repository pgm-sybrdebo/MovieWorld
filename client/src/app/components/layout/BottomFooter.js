import styled from 'styled-components';

const BottomFooterStyle = styled.p`
  color: ${props => props.theme.secondaryColor};
  padding: 1rem;
  text-align: center;
`;


const currentYear = () => {
  const today = new Date();
  return today.getFullYear();
}

const BottomFooter = () => {
  
  return (
    <BottomFooterStyle>
      © {currentYear()}. All Rights Reserved.
    </BottomFooterStyle>
  )
}

export default BottomFooter
