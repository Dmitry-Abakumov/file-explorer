import { ChangeEvent } from "react";

export type TextFieldProps = {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
