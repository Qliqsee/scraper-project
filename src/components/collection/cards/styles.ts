"use client";
import { Box, styled } from "@mui/material";

export const CollectionCardWrapper = styled(Box)`
  padding: 16px 20px;
  border: 1px solid #e2e8f0;
  width: 320px;
  height: 180px;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
`;

export const CollectionCardTitle = styled(Box)`
  color: #1e293b;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.007em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const CollectionCardDescription = styled(Box)`
  color: #475569;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const CollectionCardFooter = styled(Box)`
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CollectionCardFooterCount = styled(Box)`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.007em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1e293b;
`;
