import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { StyledFilter } from './Styled.Filter';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <StyledFilter>
      Find contact by name
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </StyledFilter>
  );
};
