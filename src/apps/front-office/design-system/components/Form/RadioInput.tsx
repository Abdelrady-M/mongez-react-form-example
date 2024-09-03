import { useRadioInput } from "@mongez/react-form";

export default function RadioInput({
  value,
  children,
}: {
  value: any;
  children: React.ReactNode;
}) {
  const { isSelected, changeValue } = useRadioInput(value);

  return (
    <label>
      <input type="radio" checked={isSelected} onChange={changeValue} />
      {children}
    </label>
  );
}
