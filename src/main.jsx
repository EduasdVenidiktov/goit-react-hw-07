import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // ваш Redux store
import App from "./App"; // ваш головний компонент
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <PersistGate loading={null} persistor={persist}> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
  </Provider>
);
