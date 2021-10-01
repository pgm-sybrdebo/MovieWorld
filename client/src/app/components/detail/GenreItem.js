import styled from 'styled-components'

const GenreItemStyle = styled.li`
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

const GenreItemLink = styled.a`
  padding: 0.5rem 1rem;
  border: 3px solid ${props => props.theme.secondaryColor};
  text-decoration: none;
  color: ${props => props.theme.secondaryColor};
  cursor: pointer;
`;

const GenreItem = ({text}) => {
  return (
    <GenreItemStyle>
      <GenreItemLink>
        {text}
      </GenreItemLink>
    </GenreItemStyle>
  )
}

export default GenreItem
