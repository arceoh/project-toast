import React from "react";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast/Toast";
import { ToastListContext } from "../ToastPlayground/ToastPlayground";

function ToastShelf() {
  const { toastList, setToastList } = React.useContext(ToastListContext)


  const handleRemoveToast = React.useCallback((id) => {
    if (!id) return;
    setToastList((prevToastList) =>
      prevToastList.filter((toast) => toast.id !== id)
    );
  }, []);

  return (<ol className={styles.wrapper}> {toastList.map(toast => {
    return <Toast handleRemoveToast={handleRemoveToast} key={toast.id} toast={toast}>{toast.message}</Toast>
  })}</ol>


  )

}

export default ToastShelf;
