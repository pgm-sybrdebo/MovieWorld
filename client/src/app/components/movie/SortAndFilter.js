import styled from 'styled-components';
import Filter from './Filter';

const SortAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1rem;
`;

const SortAndFilter = () => {
  return (
    <SortAndFilterContainer>
      <Filter />
    </SortAndFilterContainer>
  )
}

export default SortAndFilter
