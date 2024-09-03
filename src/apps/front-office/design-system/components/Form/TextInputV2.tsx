import {
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { forwardRef } from "react";

function _TextInputV2(props: FormControlProps, ref: any) {
  const {
    value,
    id,
    error,
    type,
    disabled,
    changeValue,
    inputRef,
    otherProps,
    name,
    errorsList,
  } = useFormControl({
    ...props,
    rules: [requiredRule, minLengthRule],
  });
  console.log(error);

  return (
    <div className="w-full">
      {otherProps.label && (
        <label htmlFor={id} style={{ display: "block" }}>
          {...otherProps.label}{" "}
          {props.required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <input
        type={type || "text"}
        name={name}
        value={value}
        id={id}
        onChange={e => {
          changeValue(e.target.value);
        }}
        ref={_ref => {
          inputRef.current = _ref;
          if (ref) {
            ref.current = _ref;
          }
        }}
        disabled={disabled}
        {...otherProps}
        style={{ width: "100%" }}
        className={otherProps.className}
      />

      <div style={{ color: "red" }}>{error && <span>{error}</span>}</div>
      {errorsList.minLength && (
        <span
          style={{
            color: "red",
            fontSize: "16px",
            fontWeight: "bold",
          }}>
          {errorsList.minLength}
        </span>
      )}
    </div>
  );
}

const TextInputV2 = forwardRef(_TextInputV2);

export default TextInputV2;
