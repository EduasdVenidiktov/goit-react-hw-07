import { useSelector } from "react-redux";
import css from "./Counter.module.css";

const CounterContacts = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const count = contacts.length;

  return (
    <div className={css.text}>
      <p>
        Total contacts: <span className={css.number}>{count}</span>
      </p>
    </div>
  );
};

export default CounterContacts;
