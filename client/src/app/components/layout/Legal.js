import styled from 'styled-components';

const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 48rem) {
    width: 33.33%;
    padding: 1.5rem;
    max-width: 26rem;
  }

  h3 {
    color:${props => props.theme.primaryColor};
    margin-bottom: 0.5rem;
  }
  
  a {
    position: relative;
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    margin: 0.5rem;
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


const legal = () => {
  return (
    <LegalContainer>
      <h3>Legal</h3>
      <a href='https://www.arteveldehogeschool.be/cookiebeleid'>Terms & Conditions</a>
      <a href='https://www.arteveldehogeschool.be/privacybeleid'>Privacy & Cookie policy</a>
    </LegalContainer>
  )
}

export default legal
