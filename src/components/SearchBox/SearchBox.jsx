import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <div className={css.searchBox}>
            <label>
                Find contacts by name
                <input type='search' placeholder='Search...'value={filter}  onChange={e => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
};

export default SearchBox;

