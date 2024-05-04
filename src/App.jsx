import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContactsState } from "./redux/selectors";
import ContactForm from "./components/ContactForm/ContactForm";

import css from "./App.module.css";
import ContactsList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast"; // Импортируем Toaster

export default function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(selectContactsState);
  useEffect(() => {
    dispatch(fetchContacts()).catch((error) => {
      console.error("Error loading contacts:", error);
      // Отобразить сообщение об ошибке для пользователя с помощью Toaster
      toast.error("Failed to load contacts. Please try again later.");
    });
  }, [dispatch]);

  const { isLoading } = contactsState;

  return (
    <div className={css.container}>
      <header>
        <h1 className={css.title}>Phonebook</h1>
      </header>
      <ContactForm contacts={contactsState} />
      {isLoading ? <Loader /> : null}
      <ContactsList />
      <Toaster position="top-center" />{" "}
      {/* Убедитесь, что Toaster находится в корневом узле вашего приложения */}
    </div>
  );
}
