import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";
import Header from "../Header/Header";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");

  const [toastList, setToastList] = React.useState([])

  const handleAddToast = () => {

    const newToast = {
      id: crypto.randomUUID(),
      variant: toastVariant,
      message: toastMessage,
    }

    const newToastList = [...toastList, newToast]

    setToastList(newToastList)
    setToastMessage("")
    setToastVariant(VARIANT_OPTIONS[0])

  }

  const handleRemoveToast = React.useCallback((id) => {
    if (!id) return;
    setToastList((prevToastList) =>
      prevToastList.filter((toast) => toast.id !== id)
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <ToastShelf>
        {toastList.map(toast => {
          return <Toast handleRemoveToast={handleRemoveToast} key={toast.id} toast={toast}>{toast.message}</Toast>
        })}
      </ToastShelf>

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={toastMessage}
                onChange={(e) => {
                  setToastMessage(e.target.value);
                }}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                return (
                  <label key={option} htmlFor={`variant-${option}`}>
                    <input
                      id={`variant-${option}`}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === toastVariant}
                      onChange={(e) => {
                        setToastVariant(e.target.value);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button
                onClick={handleAddToast}>
                Pop Toast!
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
