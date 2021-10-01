import styled from 'styled-components';


const FilterButtonStyle = styled.button`
  display: flex;
  width: calc(100% - 2rem);
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin: 0 1rem 1rem 1rem;
  outline: none;
  border: 3px solid #dfe1ec;
  color: #dfe1ec;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e52626;
  }

  span {
    padding-left: 1rem;
  }

  @media (min-width: 52rem) {
    display: none;
  }
`;

const FilterButton = ({ onOpenChange, open }) => {

  const handleOnChange = (e) => {
    if (typeof onOpenChange === 'function') {
      onOpenChange(!open);
    }
  }

  return (
    <FilterButtonStyle onClick={handleOnChange}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.231"><g fill="#dfe1ec"><path data-name="Path 2" d="M16.422 0H3.578A3.515 3.515 0 000 3.44v12.35a3.515 3.515 0 003.578 3.44h12.844A3.515 3.515 0 0020 15.79V3.44A3.515 3.515 0 0016.422 0zm2.406 15.79a2.364 2.364 0 01-2.406 2.31H3.578a2.364 2.364 0 01-2.406-2.31V3.44a2.364 2.364 0 012.406-2.313h12.844a2.364 2.364 0 012.406 2.313z"/><path data-name="Path 3" d="M14.609 5.628H8.651a1.174 1.174 0 00-2.33 0h-.93a.488.488 0 000 .957h.93a1.174 1.174 0 002.33 0h5.958a.488.488 0 000-.957zM7.486 6.653a.558.558 0 11.447-.547.5.5 0 01-.447.547z"/><path data-name="Path 4" d="M14.609 9.605h-.93a1.174 1.174 0 00-2.33 0H5.391a.488.488 0 000 .957h5.958a1.174 1.174 0 002.33 0h.93a.488.488 0 000-.957zm-2.095 1.025a.558.558 0 11.447-.547.5.5 0 01-.447.547z"/><path data-name="Path 5" d="M14.376 13.541h-4.282a1.174 1.174 0 00-2.33 0H5.158a.488.488 0 000 .957h2.606a1.174 1.174 0 002.33 0h4.282a.488.488 0 000-.957zm-5.447 1.025a.558.558 0 11.447-.547.5.5 0 01-.447.547z"/></g></svg>
      <span>Filter</span>
    </FilterButtonStyle>
  )
}

export default FilterButton;
