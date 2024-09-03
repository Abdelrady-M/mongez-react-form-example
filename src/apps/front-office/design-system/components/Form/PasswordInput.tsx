import {
  FormControlProps,
  matchRule,
  minLengthRule,
  requiredRule,
} from "@mongez/react-form";
import TextInputV2 from "./TextInputV2";

export type PasswordInputProps = FormControlProps & {
  // props go here
  match?: string;
};

export function PasswordInputV2(props: PasswordInputProps) {
  return <TextInputV2 {...props} type="password" />;
}

PasswordInputV2.defaultProps = {
  rules: [requiredRule, minLengthRule, matchRule],
};
