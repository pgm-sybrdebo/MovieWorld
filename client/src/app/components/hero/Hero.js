import styled from 'styled-components';

const HeroStyled = styled.div`
  width: 100%;
  height: 24rem;
  position: relative;
  margin-bottom: 3rem;
  
  img {
    position: absolute;
    top:0;
    object-fit: cover;
    object-position: ${props => props.pos};
    width:100%;
    height: 24rem;
  }

  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgba(0,0,0,0.4);

    @media (min-width: 48rem) {
      padding-left: 2rem;
    }

    h1 {
      color: #dfe1ec;
      overflow-wrap: break-word;
    }

    p {
      width: 100%;
      padding-top: 1rem;
      max-width: 36rem;
      color: #dfe1ec;
    }
  }
`;



const Hero = ({img, title, text, position = 'bottom'}) => {
  
  return (
    <HeroStyled >
      <img src={img} alt={title} pos={position}></img>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </HeroStyled>
  )
};

export default Hero;