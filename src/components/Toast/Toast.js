import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  isToastVisible,
  setIsToastVisible,
  toastMessage,
  setToastMessage,
  toastVariant,
  setToastVariant,
}) {
  const Icon = ICONS_BY_VARIANT[toastVariant];

  const handleDismissToast = () => {
    setToastMessage("");
    setToastVariant("notice");
    setIsToastVisible(false);
  };

  if (!isToastVisible) return;

  return (
    <div className={`${styles.toast} ${styles[toastVariant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{toastMessage}</p>
      <button className={styles.closeButton} onClick={handleDismissToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
