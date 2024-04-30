// ================ з пропсами =====================
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleInputChange = (ev) => {
    onChange(ev.target.value); // Вызываем функцию onChange для обновления значения в родительском компоненте
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
