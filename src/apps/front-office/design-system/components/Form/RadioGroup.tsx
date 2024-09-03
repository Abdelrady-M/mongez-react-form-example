import {
  RadioGroupContext,
  requiredRule,
  useFormControl,
  type FormControlProps,
} from "@mongez/react-form";

type RadioGroupProps = FormControlProps & {
  children: React.ReactNode;
};

export default function RadioGroup(props: RadioGroupProps) {
  const { value, changeValue } = useFormControl({
    ...props,
    rules: [requiredRule],
  });

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        changeValue,
      }}>
      {props.children}
    </RadioGroupContext.Provider>
  );
}
