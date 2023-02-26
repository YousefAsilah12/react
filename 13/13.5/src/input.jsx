import React, { useRef, useEffect } from 'react';

export function InputWithFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
    </div>
  );
}
