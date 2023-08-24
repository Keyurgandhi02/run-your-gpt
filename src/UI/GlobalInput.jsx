import React from "react";

function GlobalInput({
  inputType,
  inputPlaceHolder,
  onChangeHandler,
  className,
  isValue,
  disabled,
}) {
  return (
    <input
      value={isValue}
      type={inputType}
      placeholder={inputPlaceHolder}
      onChange={(e) => onChangeHandler(inputPlaceHolder, e.target.value)}
      className={className}
      disabled={disabled}
    />
  );
}

export default GlobalInput;
