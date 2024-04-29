// export default function ContactForm() {}

//==========================================================
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik"; // Для того щоб відобразити користувачу помилки валідації, використовується компонент ErrorMessage.
import { useId } from "react";
import * as Yup from "yup"; //імпорт бібліотеки валідації в компонент форми.
// import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
// import addContact from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";
import CounterContacts from "../Counter/Counter.jsx";
import { addContacts } from "../../redux/contactsOps.js";

const initialValues = {
  Name: "",
  Number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId(); //хук useId для створення унікальних ідентифікаторів полів.
  const numberFieldId = nanoid();
  const FeedbackSchema = Yup.object().shape({
    Name: Yup.string()
      .trim() //Yup.string(), Yup.min(), Yup.max(), Yup.required() - валідатори,
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      // .matches(/^[^0-9]*$/, "Name should not contain numbers") // не дозволяє вводити цифри
      .required("Required"),
    Number: Yup.string("Must be a valid number!").required("Required"),
  });

  // При відправці форми викликається колбек-функція
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.Name,
      number: values.Number,
    };
    dispatch(addContacts(newContact)); // Додаємо новий контакт до списку або передаємо його до батьківського компонента

    actions.resetForm(); //метод resetForm для очищення полів форми після відправки.
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema} //пропс validationSchema, в який передана схема валідації Yup.
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="Name"
            id={nameFieldId}
          />
          <ErrorMessage name="Name" component="p" className={css.errorMess} />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="text"
            name="Number"
            id={numberFieldId}
          />
          <ErrorMessage name="Number" component="p" className={css.errorMess} />
        </div>
        <CounterContacts />
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
