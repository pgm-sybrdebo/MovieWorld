import styled from 'styled-components';

const CircleStyle = styled.svg`
  display: block;
  max-width: ${props => props.d}rem;
  max-height: ${props => props.d}rem;

  path {
    fill: #191a32;
    strokeLinecap: round;
    stroke-width: 0.2rem;
  }

  text {
    fill: #dfe1ec;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`;

const Circle = ({rating, d = 4}) => {
  const percentage = parseInt(rating) * 10;
  return (
    <CircleStyle viewBox="0 0 36 36" d={d}>
        <path
          stroke="#dfe1ec" 
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path stroke="#89fd17"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35">{percentage}%</text> 
      </CircleStyle>
  )
}

export default Circle
