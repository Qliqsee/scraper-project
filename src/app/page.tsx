"use client";
import { Collections } from "@/components/collection";
import CollectionForm from "@/components/form";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import Menu from "@/components/Menu";
import { Box, Stack } from "@mui/material";
import { useGlobalContext } from "../context/GlobalContext";
import { TextField } from "@/components/input/TextField";
import UserInfo from "@/components/user-info";
import Table from "@/components/table";
import { Select } from "@/components/input/Select";

export default function Home() {
  const { collection } = useGlobalContext();
  return (
    <Stack width={"100%"} direction={"row"}>
      <Menu />
      {collection ? <UserDetail /> : <CollectionResults />}
    </Stack>
  );
}

const CollectionResults = () => {
  return (
    <DashboardLayout>
      <CollectionForm />
      <Collections />
    </DashboardLayout>
  );
};

const UserDetail = () => {
  const { collection, userId } = useGlobalContext();
  return (
    <DashboardLayout>
      <Stack mt="40px" direction={"row"} columnGap={"40px"} rowGap={"12px"}>
        <Box width={"25%"}>
          <TextField value={collection?.title} label="Name" />
        </Box>
        <Box width={"25%"}>
          <Select bRadius="123px" label="Reference Links">
            {collection?.referenceLinks?.map((link, i) => (
              <option key={i}>{link}</option>
            ))}
          </Select>
        </Box>
        <Box width={"25%"}>
          <TextField value={collection?.tags.join(", ")} label="Tag" />
        </Box>
        <Box width={"25%"}>
          <TextField value={"Canada"} label="Country" />
        </Box>
      </Stack>

      <Stack spacing={"54px"} width={"100%"} direction={"row"} mt="40px">
        <Table type={userId ? "user" : "collection"} />

        {userId && (
          <Box width={"100%"}>
            <UserInfo />
          </Box>
        )}
      </Stack>
    </DashboardLayout>
  );
};
