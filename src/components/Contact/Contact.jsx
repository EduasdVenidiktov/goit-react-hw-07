import css from "./Contact.module.css";
import personIcon from "../../assets/person.svg";
import phoneIcon from "../../assets/phone.svg";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contactContainer}>
      <div>
        <div className={css.infoBlock}>
          <img className={css.icon} src={personIcon} alt="Icon people" />
          <h3>{name}</h3>
        </div>
        <div className={css.infoBlock}>
          <img className={css.icon} src={phoneIcon} alt="Icon phone" />
          <a className={css.phoneNumber} href={`tel:${number}`}>
            {number}
          </a>
        </div>
      </div>
      <button className={css.buttonDelete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

//==========================================================================

// import css from "./Contact.module.css";
// import personIcon from "../../assets/person.svg";
// import phoneIcon from "../../assets/phone.svg";

// export default function Contact({ data: { id, name, number }, onDelete }) {
//   return (
//     <div className={css.contactContainer}>
//       <div>
//         <div className={css.infoBlock}>
//           <img className={css.icon} src={personIcon} alt="Icon people" />
//           <h3>{name}</h3>
//         </div>
//         <div className={css.infoBlock}>
//           <img className={css.icon} src={phoneIcon} alt="Icon phone" />
//           <a className={css.phoneNumber} href={`tel:${number}`}>
//             {number}
//           </a>
//         </div>
//       </div>
//       <button className={css.buttonDelete} onClick={() => onDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }
