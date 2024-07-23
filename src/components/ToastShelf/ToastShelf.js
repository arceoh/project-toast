import React from "react";

import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {

  return (<ol className={styles.wrapper}>{children}</ol>)

}

export default ToastShelf;
