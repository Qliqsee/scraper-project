"use client";
import React from "react";
import {
  CollectionCardDescription,
  CollectionCardFooter,
  CollectionCardFooterCount,
  CollectionCardTitle,
  CollectionCardWrapper,
} from "./styles";
import Tag from "@/components/pill/Tag";
import { Box, Stack } from "@mui/material";
import { Users } from "@phosphor-icons/react/dist/ssr";
import { useGlobalContext } from "@/context/GlobalContext";
import { CollectionItem } from "@/utils/types/globals.type";

const CollectionCard = ({ collection }: { collection: CollectionItem }) => {
  const { setCollection } = useGlobalContext();

  function truncateString(inputString: string) {
    // Reference string length (can be modified as needed)
    const maxLength = 45;

    // Check if the input string is longer than the reference string
    if (inputString.length > maxLength) {
      // Truncate the string and append '...'
      return inputString.slice(0, maxLength) + "...";
    }

    // Return the input string if it's not too long
    return inputString;
  }

  return (
    <CollectionCardWrapper
      onClick={() => {
        setCollection(collection);
      }}
    >
      <Stack rowGap={"8px"} columnGap={"8px"} direction={"row"} flexWrap={"wrap"}>
        {collection.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Stack>
      <CollectionCardTitle mt="12px">{collection.title}</CollectionCardTitle>
      <CollectionCardDescription mt="8px">{truncateString(collection.description)}</CollectionCardDescription>
      <CollectionCardFooter>
        <Stack direction={"row"} columnGap={"4px"}>
          <Users weight="bold" color="#94A3B8" size={19} />
          <CollectionCardFooterCount>{collection.usersCount}</CollectionCardFooterCount>
        </Stack>
        <Box fontSize={18}>🇨🇦</Box>
      </CollectionCardFooter>
    </CollectionCardWrapper>
  );
};

export default CollectionCard;
