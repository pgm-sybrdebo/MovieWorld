import styled from 'styled-components';
import {useState, useEffect} from 'react';


const SortInput = styled.select`
  width: calc(100% - 2rem);
  margin: 0 1rem;  
  padding: 0.5rem 1rem;
  border: 3px solid #dfe1ec;
  background-color: transparent;
  color: #dfe1ec;
  cursor: pointer;
  
  &:hover {
    border-color: #e52626;
  }

  &:after {
    color: #dfe1ec;
  }

  option {
    background-color: ${props => props.theme.primaryColor};
  }

  @media (min-width: 52rem) {
    width: auto;
    display: block;
    margin-left: auto;
    margin-right: 2rem;
  }
`;

const Sort = ({onSortChange}) => {
  const [order, setOrder] = useState("popularity.desc")
  const handleOnChange = (e) => {
    setOrder(e.target.value);
  }

  useEffect(() => {
    if (typeof onSortChange === 'function') {
      onSortChange(order);
    }   
  }, [order, onSortChange]);

  return (
    <form>
      <SortInput value={order} onChange={handleOnChange}>
        <option value="popularity.desc">
          Sort by popularity &#8595;
        </option>
        <option value="popularity.asc">
          Sort by popularity &#8593;
        </option>
        <option value="vote_average.desc">
          Sort by rating &#8595;
        </option>
        <option value="vote_average.asc">
          Sort by rating &#8593;
        </option>
    </SortInput>
    </form>
  )
}

export default Sort
