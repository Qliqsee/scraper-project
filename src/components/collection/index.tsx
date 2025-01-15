import React from "react";
import CollectionCard from "./cards/CollectionCard";
import { Box, CircularProgress, Stack } from "@mui/material";
import { CollectionTitle } from "./styles";
import useGetRequest from "@/apiRequests/useGetRequest";
import { CollectionItem } from "@/utils/types/globals.type";

export const Collections = () => {
  const { data, loading } = useGetRequest<CollectionItem[]>("collection/list", []);

  return (
    <Box mt="40px">
      <CollectionTitle>Your Collections</CollectionTitle>
      <Stack flexWrap={"wrap"} direction={"row"} columnGap={"40px"} rowGap={"16px"} mt="12px">
        {loading && !data?.result?.length ? (
          <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress />
          </Stack>
        ) : (
          data?.result?.map((collection) => <CollectionCard collection={collection} key={collection.id} />)
        )}
      </Stack>
    </Box>
  );
};
