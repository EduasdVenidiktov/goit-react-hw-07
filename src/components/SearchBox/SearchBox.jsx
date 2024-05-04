import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setStatusFilter } from "../../redux/filtersSlice";

const SearchBox = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const handleInputChange = (ev) => {
    const newValue = ev.target.value;

    onChange(newValue); // Вызываем функцию onChange для обновления значения в родительском компоненте
    dispatch(setStatusFilter(newValue));
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        className={css.inputArea}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Input name or phone number"
      />
    </div>
  );
};

export default SearchBox;
