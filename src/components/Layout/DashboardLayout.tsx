"use client";
import React from "react";
import { DashboardTitle, DashboardWrapper, HeaderButtonText } from "./styles";
import { useGlobalContext } from "@/context/GlobalContext";
import { Button, Stack } from "@mui/material";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const DashboardLayout = ({ children }: { children: any }) => {
  const { collection, user } = useGlobalContext();
  return (
    <DashboardWrapper>
      <Stack direction={"row"} alignItems={"center"} spacing={1} justifyContent={"space-between"} pr="73px">
        <DashboardTitle>{collection?.title || "Analytics Dashboard"} </DashboardTitle>
        {Boolean(collection || user) && (
          <Stack direction={"row"} alignItems={"center"} spacing={"16px"}>
            <Button
              sx={{
                textTransform: "capitalize",
                width: "fit-content",
                color: "#475569",
                border: "1px solid #CBD5E1",
                borderRadius: "20px",
              }}
              variant="outlined"
            >
              <DownloadSimple size={17} color="#475569" weight="bold" /> <HeaderButtonText ml="5px">Download</HeaderButtonText>
            </Button>

            <Button
              sx={{ textTransform: "capitalize", width: "fit-content", bgcolor: "#4F46E5", color: "white", borderRadius: "20px" }}
              variant="contained"
            >
              <HeaderButtonText>Save</HeaderButtonText>
            </Button>
          </Stack>
        )}
      </Stack>
      {children}
    </DashboardWrapper>
  );
};

export default DashboardLayout;
