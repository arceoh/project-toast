import React from "react";

function useEscape() {
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
}

export default useEscape;
