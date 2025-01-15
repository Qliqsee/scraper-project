import { Box, styled } from "@mui/material";
import Link from "next/link";

type AccordionTitleProps = { expanded: boolean };

export const AccordionTitle = styled(Box)<AccordionTitleProps>`
  color: #334155;
  font-family: Inter;
  ${({ expanded }) =>
    expanded
      ? `
 font-size: 16px;
  font-weight: 800;
  line-height: 22px;
`
      : `
 font-size: 14px;
  font-weight: 600;
  line-height: 20px;`}

  letter-spacing: -0.007em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const ProfileLink = styled(Link)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;
  margin-right: 10px;
  /* width: 40%; */
  display: inline-block;
`;
