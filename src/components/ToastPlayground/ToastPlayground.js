import React from "react"

import Header from "../Header/Header";
import ToastShelf from "../ToastShelf/ToastShelf";
import ToastForm from "../ToastForm/ToastForm"
import styles from "./ToastPlayground.module.css";

export const ToastListContext = React.createContext()

function ToastPlayground() {

  const [toastList, setToastList] = React.useState([])

  return (
    <ToastListContext.Provider value={{ toastList, setToastList }} >
      <div className={styles.wrapper}>
        <Header />
        <ToastShelf />
        <ToastForm />
      </div>
    </ToastListContext.Provider>
  );
}

export default ToastPlayground;
