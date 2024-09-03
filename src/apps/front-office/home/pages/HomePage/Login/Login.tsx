import { Anchor, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { upperFirst, useToggle } from "@mantine/hooks";
import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions, getActiveForm } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import CheckboxInput from "apps/front-office/design-system/components/Form/CheckboxInput";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import RadioGroup from "apps/front-office/design-system/components/Form/RadioGroup";
import RadioInput from "apps/front-office/design-system/components/Form/RadioInput";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";

export type LoginProps = {
  children?: React.ReactNode;
};
export default function Login(props: LoginProps) {
  const [type, toggle] = useToggle(["login", "register"]);

  const submitForm = ({ values, form }: FormSubmitOptions) => {
    console.log(values);
    setTimeout(() => {
      form.submitting(false);
    }, 3000);
  };
  const onError = formControls => {
    const errors = formControls.map(control => control.error);
    console.log(errors);
  };
  const resetForm = () => {
    const form = getActiveForm();
    form?.reset();
  };
  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      {...props}
      style={{ maxWidth: 400, margin: "auto" }}>
      <Text size="lg" fw={500}>
        Welcome to mongez-react-form, {type} with
      </Text>
      <Divider label="email and password" labelPosition="center" my="lg" />

      <Form onSubmit={submitForm} onError={onError}>
        <Stack>
          {type === "register" && (
            <TextInputV2
              required
              type="text"
              label="Name"
              placeholder="Your name"
              name="Name"
              minLength={3}
            />
          )}

          <EmailInputV2
            required
            name="email"
            label={trans("email")}
            placeholder="hello@hello.dev"
            errorKeys={{
              matchingInput: "Passwords do not match",
            }}
          />

          <PasswordInputV2
            name="password"
            required
            label={trans("password")}
            placeholder="Your password"
            radius="md"
          />
          {type === "register" && (
            <PasswordInputV2
              name="confirmPassword"
              match="password"
              required
              placeholder={trans("confirmPassword")}
              label={trans("confirmPassword")}
            />
          )}
          {type === "register" && (
            <div>
              <label htmlFor="gender" style={{ display: "block" }}>
                Gender
              </label>
              <RadioGroup name="gender">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <RadioInput value="male">Male</RadioInput>
                  <RadioInput value="female">Female</RadioInput>
                </div>
              </RadioGroup>
            </div>
          )}
          {type === "register" && (
            <div className="flex items-center">
              <label htmlFor="remember">Remember Me</label>
              <CheckboxInput name="checkbox" required id="remember" />
            </div>
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs">
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <SubmitButton type="submit">{upperFirst(type)}</SubmitButton>
          <button onClick={resetForm}>Reset</button>
        </Group>
      </Form>
    </Paper>
  );
}
