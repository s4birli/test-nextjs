import { TextField, TextFieldProps } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

export type ITextBoxProps = TextFieldProps & {
  name: string;
  rules?: any;
  defaultValue?: any;
};

const TextBox: React.FC<ITextBoxProps> = (props) => {
  const formContext = useFormContext();

  const { name, rules, defaultValue, ...inputProps } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, defaultValue });

  if (!formContext || !name) {
    const msg = !formContext
      ? "TextBox must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  return (
    <TextField
      sx={{ mt: 3 }}
      fullWidth
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={!!error}
      helperText={error ? error.message : null}
      {...inputProps}
    />
  );
};

export default TextBox;
