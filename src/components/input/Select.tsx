"use client";
import { ChangeEvent } from "react";
import { Box } from "@mui/material";
import { InputLabel, Select as StyledSelect, SelectWrapper } from "./styles";

type SelectProps = {
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  errorMessage?: string;
  notRounded?: boolean;
  bRadius?: string;
};

export const Select = ({ label, required, notRounded, bRadius, onChange, value, errorMessage, name, children }: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
      <SelectWrapper>
        <StyledSelect
          notRounded={notRounded}
          bRadius={bRadius}
          error={!!errorMessage}
          onChange={handleChange}
          name={name}
          value={value}
        >
          {children}
        </StyledSelect>
      </SelectWrapper>
    </Box>
  );
};
