import React from "react";
import { FormWrapper, FormTitle } from "./styles";
import { Box, Stack } from "@mui/material";
import { TextField } from "../input/TextField";

const CollectionForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Start a new Collection</FormTitle>

      <Stack mt="12px" width={"100%"} direction={"row"} flexWrap={"wrap"} rowGap={"12px"} columnGap={"100px"}>
        <Box width={"35%"}>
          <TextField label="Name" />
        </Box>
        <Box width={"35%"}>
          <TextField label="Tag" />
        </Box>
        <Box width={"35%"}>
          <TextField label="Reference Links" />
        </Box>
        <Box width={"35%"}>
          <TextField label="Country" />
        </Box>
      </Stack>
    </FormWrapper>
  );
};

export default CollectionForm;
