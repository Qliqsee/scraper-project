"use client";
import React from "react";
import { MenuWrapper } from "./styles";
import { Flower, HouseSimple } from "@phosphor-icons/react/dist/ssr";
import { Stack } from "@mui/material";
import { useGlobalContext } from "@/context/GlobalContext";

const Menu = () => {
  const { setCollection, setUser, setUserId } = useGlobalContext();

  const reset = () => {
    setCollection(null);
    setUserId(null);
  };

  return (
    <MenuWrapper>
      <Flower size={41} color="white" />
      <Stack
        onClick={reset}
        justifyContent={"center"}
        alignItems={"center"}
        width={48}
        height={48}
        borderRadius={"50%"}
        bgcolor={"#6366F1"}
        sx={{ cursor: "pointer" }}
      >
        <HouseSimple size={24} color="white" weight="bold" />
      </Stack>
    </MenuWrapper>
  );
};

export default Menu;
