import { useState, useEffect } from 'react';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterListTv from './FilterListTv';



const Filter = ({onFilChange, cat="movie"}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState();

  const handleOpenChange = (isSelected) => {
    setIsOpen(isSelected);
  };

  const handleFilterChange = (isSelected) => {
    setFilter(isSelected);
  }

  useEffect(() => {
    if (typeof onFilChange === 'function') {
      onFilChange(filter);
    }   
  }, [filter, onFilChange]);

  return (
    <>
      <FilterButton open={isOpen} onOpenChange={handleOpenChange} />
      {
        cat === 'movie' ?
        (
          <FilterList open={isOpen}  cat={cat} onOpenChange={handleOpenChange} onFilterChange={handleFilterChange} />
        ) : 
        (
          <FilterListTv open={isOpen}  cat={cat} onOpenChange={handleOpenChange} onFilterChange={handleFilterChange} />
        )
      }
    </>
  )
}

export default Filter;
