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

function Toast({ toast, children, handleRemoveToast }) {

  const variant = toast.variant;
  const id = toast.id;

  const Icon = ICONS_BY_VARIANT[variant];

  const timerRef = React.useRef(null);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      handleRemoveToast(id);
    }, 5000);
  };

  React.useEffect(() => {
    startTimer();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  return (

    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => { handleRemoveToast(id) }}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
