import { Box, Paper, styled, TableCell } from "@mui/material";

export const TableTitle = styled(Box)`
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1e293b;
  text-align: left;
  margin-left: 40px;
  margin-bottom: 16px;
`;

type TableWrapperProps = { type: "collection" | "user" };
export const TableWrapper = styled(Paper)<TableWrapperProps>`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  padding-top: 16px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${({ type }) =>
    type === "collection"
      ? `
  margin-top: 40px;
  `
      : `
  height: fit-content;
  max-width: 417px;
  position: sticky;
  top: 20px;
  left: 0;
      `}
`;

export const TableHeadCell = styled(TableCell)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1e293b;
`;

export const TableBodyCell = styled(TableCell)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;
  cursor: pointer;
`;
