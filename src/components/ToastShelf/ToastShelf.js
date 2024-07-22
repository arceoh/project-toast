import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

const SAMPLE_TOAST = [
  {
    id: 1,
    variant: "notice",
    message: "What up buttercup!",
    isToastVisible: true,
  },
  { id: 2, variant: "error", message: "I can't poop!", isToastVisible: true },
  {
    id: 3,
    variant: "warning",
    message: "There's no more ketchup.",
    isToastVisible: true,
  },
];

function ToastShelf() {
  return (
    <ol className={styles.wrapper}>
      {SAMPLE_TOAST.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            Toast
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
