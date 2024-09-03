import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInputV2 from "./TextInputV2";

export function EmailInputV2(props: FormControlProps) {
  return <TextInputV2 {...props} type="email" />;
}

EmailInputV2.defaultProps = {
  rules: [requiredRule, emailRule],
};
