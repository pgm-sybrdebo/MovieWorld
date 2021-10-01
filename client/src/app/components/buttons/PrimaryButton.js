import styled from 'styled-components';

const PrimButton = styled.button`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
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
`;

const PrimaryButton = ({ content, width, maxWidth }) => {
  return (
    <PrimButton width={width} maxWidth={maxWidth}>
      {content}
    </PrimButton>
  )
}

export default PrimaryButton;
