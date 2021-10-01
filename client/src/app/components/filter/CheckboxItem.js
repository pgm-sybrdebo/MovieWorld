import styled from 'styled-components';


const Checkbox = styled.div`
  padding-bottom: 1rem;

  &:last-child {
    padding-bottom: 0;
  }

  label {
    text-transform: capitalize;
    cursor: pointer;
    padding-left: 1rem;

    input {
      margin-right: 1rem;
    }
  }
`;

const CheckboxItem = ({category}) => {
  return (
    <Checkbox>
      <label>
        <input type="checkbox" value={category} name={category}/>
        {category}
      </label>
    </Checkbox>
  )
}

export default CheckboxItem;
