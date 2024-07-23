import React from 'react';
import { ToastListContext } from "../ToastPlayground/ToastPlayground";
import Button from "../Button";
import styles from "./ToastForm.module.css";


const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];


function ToastForm() {

  const { toastList, setToastList } = React.useContext(ToastListContext)

  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");

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

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return <div className={styles.controlsWrapper}>
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
  </div>;
}

export default ToastForm;
