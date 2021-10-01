import styled from 'styled-components';

const ErrorStyle = styled.div`
  padding: 1rem;
`;

const Error = ({children}) => {
  return (
      <ErrorStyle>
          <p>Error!</p>
          <p>
              {children}
          </p>
      </ErrorStyle>
  )
}

export default Error