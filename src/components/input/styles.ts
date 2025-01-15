import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const TextfieldWrapper = styled(Box)`
  position: relative;
  background: transparent;
`;

interface TextfieldProps {
  endIcon?: boolean;
  error?: boolean;
  notRounded?: boolean;
}

export const Textfield = styled.input<TextfieldProps>`
  flex-grow: 1;
  display: flex;
  width: 100%;
  max-height: 70px;
  min-height: 43px;
  height: auto;
  background: white;
  outline: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 8px 12px;
  ${({ endIcon }) => (endIcon ? `padding-right: 35px;` : "")}
  scrollbar-width: none;
  -ms-overflow-style: none;
  border: 1px solid #94a3b8;
  ${({ notRounded }) => (notRounded ? "border-radius: 10px;" : `border-radius: 123px;`)}
  transition: all 0.2s;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.007em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  ${({ error }) =>
    error
      ? `
      border: 1px solid;
      border-bottom: 1px solid;
      transition: all 0.2s;
    `
      : ""}
`;

export const InputLabel = styled(Box)`
  display: inline-block;
  padding-block: 0px;
  padding-inline: 0px;
  margin-block-end: 0.25rem;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 6px;
`;

export const SelectWrapper = styled.span`
  position: relative;
  background: transparent;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #000;
  }

  &:focus-within::after {
    border-bottom: 6px solid #000;
    border-top: none;
  }
`;
interface SelectProps {
  error?: boolean;
  notRounded?: boolean;
}

export const Select = styled.select<SelectProps>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: none;
  width: 100%;
  max-height: 70px;
  min-height: 43px;
  height: auto;
  background: white;
  outline: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 0px 10px 0 10px;
  border: 1px solid #94a3b8;
  ${({ notRounded }) => (notRounded ? "" : `  border-radius: 10px;`)}
  transition: all 0.2s;
`;
