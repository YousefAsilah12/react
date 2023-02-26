import { useState } from "react";
import { useEffect } from "react";

export function Box({ size }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      {isVisible && <div className={`box ${size}`} />}
    </>
  );
}
