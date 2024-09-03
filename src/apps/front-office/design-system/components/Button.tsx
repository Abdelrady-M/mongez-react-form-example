import { useSubmitButton } from "@mongez/react-form";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "secondary" | "primary";
};

const variants = {
  primary: "bg-primary-main hover:bg-primary-hover",
  secondary: "bg-secondary hover:bg-green-700",
};

export const Button = ({ children, variant, className, ...rest }: Props) => {
  const classes = variant ? variants[variant] : "";
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold uppercase text-[14px] rounded-md duration-400 transition-colors",
        className,
        classes,
      )}
      {...rest}>
      {children}
    </button>
  );
};

export function SubmitButton({
  variant = "secondary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "secondary" | "primary";
}) {
  const classes = variant ? variants[variant] : "";
  // TODO: Form is not triggering proper events for invalid controls
  const { isSubmitting, disabled } = useSubmitButton();

  const disabledClasses = disabled ? "opacity-50 cursor-no-drop" : "";
  return (
    <button
      type="submit"
      disabled={disabled || isSubmitting}
      className={cn(disabledClasses, classes)}
      {...props}
    />
  );
}
