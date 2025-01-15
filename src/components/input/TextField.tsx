"use client";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Box } from "@mui/material";
import { InputLabel, Textfield, TextfieldWrapper } from "./styles";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  required?: boolean;
  endIcon?: React.ReactNode;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  errorMessage?: string;
  helpeTextRight?: any;
  notRounded?: boolean;
  isDisabled?: boolean;
};

export const TextField = ({
  label,
  placeholder,
  required,
  onChange,
  endIcon,
  value,
  errorMessage,
  type,
  name,
  notRounded,
  isDisabled,
}: TextFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <Box>
      {!!label && (
        <InputLabel>
          {label}
          {required && <span>*</span>}
        </InputLabel>
      )}
      <TextfieldWrapper>
        <Textfield
          disabled={isDisabled}
          notRounded={notRounded}
          error={!!errorMessage}
          endIcon={!!endIcon}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </TextfieldWrapper>
    </Box>
  );
};
