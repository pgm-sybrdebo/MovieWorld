import styled from 'styled-components';
import {useState, useEffect} from 'react';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const GENRES = ['action', 'animation', 'adventure', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 'horror', 'music', 'mystery', 'romance', 'sciencefiction', 'thriller', 'war', 'western'];

const FilterForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: scroll;
  margin: 0;
  transform: ${ props => props.o ? 'translateX(0)'  :  'translateX(-200%)' };
  transition: transform 0.3s ease-in-out;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 1000;

  h2 {
    font-size: 2rem;
    padding-bottom: 2rem;
    color: ${ props => props.theme.secondaryColor }
  }

  h3 {
    padding-bottom: 1.5rem;
  }

  @media (min-width: 52rem) {
    display: block;
    overflow-y: auto;
    transform: none;
    position: static;
    padding: 1.5rem;
    padding-top: 0;
    background-color:transparent;
    width: 30%;
    max-width: 24rem;
`;

const Checkbox = styled.label`
  display: block;
  text-transform: capitalize;
  cursor: pointer;
  padding-left: 1rem;
  padding-bottom: 1rem;

  input {
    margin-right: 1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent; 
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }

  @media (min-width: 52rem) {
    display: none;
  }
`;

const FilterItem = styled.div`
  padding: 0.5rem 0 1.5rem 0;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid ${props => props.theme.secondaryColor};
  width: 100%;
  max-width: 14rem;
  
  div {
    padding-left: 0.5rem
  }
`;

const RangeSlider = styled.div`
  padding: 0 1rem;
  max-width: 24rem;

  p {
    padding-bottom: 1rem;
  }
`;

const FilterList = ( { open, onOpenChange, onFilterChange } ) => {

  const [formData, setFormData] = useState({
    action: false,
    animation: false,
    adventure: false,
    comedy: false,
    crime: false,
    documentary: false,
    drama: false,
    family: false, 
    fantasy: false,
    history: false,
    horror: false,
    music: false, 
    mystery: false,
    romance: false,
    sciencefiction: false,
    thriller: false,
    war: false,
    western: false,
    releaseYear: [ 1902, 2021 ],
    userScore: [ 0, 100 ],
  });
  
  const handleOnOpenChange = (e) => {
    if (typeof onOpenChange === 'function') {
      onOpenChange(!open);
    }
  }

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: (e.target.type !== 'checkbox') ? e.target.value : e.target.checked
    })
  }

  const handleOnSliderChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (typeof onFilterChange === 'function') {
      onFilterChange(formData);
    }   
  }, [formData, onFilterChange]);

  return (
    <FilterForm o={open} onSubmit={handleOnSubmit}>
      <h2>Filter</h2>
      <CloseButton onClick={handleOnOpenChange}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-name="close (1)" d="M14.2 12l9.345-9.345a1.556 1.556 0 00-2.2-2.2L12 9.801 2.655.456a1.556 1.556 0 10-2.2 2.2L9.8 12 .456 21.345a1.556 1.556 0 102.2 2.2L12 14.199l9.345 9.345a1.556 1.556 0 102.2-2.2zm0 0" fill="#dfe1ec"/></svg>
      </CloseButton>
      <FilterItem />
      <FilterItem>
        <h3>Genres</h3>
        <div>
          {GENRES.map(genre => {
            return (
              <Checkbox key={genre}>
                <input type="checkbox" value={formData.genre} name={genre} onChange={handleOnChange}/>
                {genre}
              </Checkbox>
            )
          })}
        </div> 
      </FilterItem>
      <FilterItem>
      <h3>Release year</h3>
        <RangeSlider>
        <p>{ formData.releaseYear[0] } - { formData.releaseYear[1] }</p>
        <Range
          draggableTrack
          name="releaseYear"
          min={ 1902 }
          max={ 2021 }
          step={7}
          value={ formData.releaseYear }
          onChange={ (e) => handleOnSliderChange(e, 'releaseYear') }
          trackStyle={[{ backgroundColor: '#e52626' }]}
          railStyle={{ backgroundColor: props => props.theme.secondaryColor}}
        />
        </RangeSlider>
      </FilterItem>
      <FilterItem>
      <h3>User score</h3>
        <RangeSlider>
        <p>{ formData.userScore[0] } - { formData.userScore[1] }</p>
        <Range
          draggableTrack
          name="userScore"
          min={ 0 }
          max={ 100 }
          step={ 10 }
          value={ formData.userScore }
          onChange={(e) => handleOnSliderChange(e, 'userScore')}
          trackStyle={[{ backgroundColor: '#e52626' }]}
          railStyle={{ backgroundColor: props => props.theme.secondaryColor}}
        />
        </RangeSlider>
      </FilterItem>
    </FilterForm>
  )
}

export default FilterList;
