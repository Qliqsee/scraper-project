import { Box, Paper, styled, TableCell } from "@mui/material";
import Link from "next/link";

export const UserinfoWrapper = styled(Box)`
  padding: 22px 24px;
  border: 1px solid #cbd5e1;
  border-radius: 32px;
`;

export const UserinfoSectionTitle = styled(Box)`
  color: #1e293b;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.007em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const CampaignName = styled(Link)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #334155;
  text-decoration: none;
  display: inline-block;
`;

export const CampaignContribution = styled(Box)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;
`;
