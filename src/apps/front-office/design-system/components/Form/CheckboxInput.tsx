import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
export default function CheckboxInput(props: FormControlProps) {
  const { checked, setChecked, error, otherProps, id } = useFormControl({
    ...props,
    rules: [requiredRule],
    type: "checkbox",
    defaultValue: true,
  });

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked);
        }}
        {...otherProps}
      />
      {error && <span>{error}</span>}
    </>
  );
}
