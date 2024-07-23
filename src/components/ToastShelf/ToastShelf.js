import React from "react";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast/Toast";
import { ToastListContext } from "../ToastPlayground/ToastPlayground";

function ToastShelf() {
  const { toastList, setToastList } = React.useContext(ToastListContext);

  React.useEffect(() => {
    const dismissAllToast = (e) => {
      if (e.key != "Escape") return;
      setToastList([]);
    };

    window.addEventListener("keyup", dismissAllToast);

    return () => {
      window.removeEventListener("keyup", dismissAllToast);
    };
  }, []);

  const handleRemoveToast = React.useCallback((id) => {
    if (!id) return;
    setToastList((prevToastList) =>
      prevToastList.filter((toast) => toast.id !== id)
    );
  }, []);

  return (
    <ol
      role="region"
      className={styles.wrapper}
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map((toast) => {
        return (
          <Toast
            handleRemoveToast={handleRemoveToast}
            key={toast.id}
            toast={toast}
          >
            {toast.message}
          </Toast>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
