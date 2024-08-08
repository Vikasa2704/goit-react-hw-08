import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
      };

    return (
        <div className={css.searchBox}>
            <label>
                Find contacts by name
                <input type='search' placeholder='Search...'value={filter} onChange={handleChange} />
            </label>
        </div>
    );
};

export default SearchBox;

