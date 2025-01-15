import * as React from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TableBodyCell, TableHeadCell, TableTitle, TableWrapper } from "./styles";
import { CaretUpDown, FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Box, CircularProgress, Stack } from "@mui/material";
import Tag from "../pill/Tag";
import { useGlobalContext } from "@/context/GlobalContext";
import useGetRequest from "@/apiRequests/useGetRequest";
import { iCollectionUser, Source } from "@/utils/types/globals.type";
import { TextField } from "../input/TextField";
import { Select } from "../input/Select";
import { useDebounce } from "use-debounce";

interface Column {
  id: "name" | "location" | "tags" | "metadata";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Full Name", minWidth: 170 },
  { id: "location", label: "Location", minWidth: 170 },
  {
    id: "tags",
    label: "Tags",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "metadata",
    label: "Information available from",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  name: string;
  location: string;
  tags: any;
  metadata: any;
  id: number;
}

function createData(id: number, name: string, location: string, tags: any, metadata: any): Data {
  return { name, location, tags, metadata, id };
}

function getSocialMediaLogo(platform: Source) {
  switch (platform) {
    case "facebook":
      return <FacebookLogo weight="fill" size={24} />;
    case "instagram":
      return <InstagramLogo weight="fill" size={24} />;
    case "linkedin":
      return <LinkedinLogo weight="fill" size={24} />;
    default:
      return null;
  }
}

export default function Table({ type }: { type: "collection" | "user" }) {
  const { setUserId, collection } = useGlobalContext();

  const getSocialMediaLogos = (platforms: Source[]) => (
    <Stack direction={"row"} gap={"8px"} flexWrap={"wrap"}>
      {platforms.map((p) => getSocialMediaLogo(p))}
    </Stack>
  );
  const getTags = (tags: string[]) => (
    <Stack direction={"row"} gap={"8px"} flexWrap={"wrap"}>
      {tags.map((t, i) => (
        <Tag key={i}>{t}</Tag>
      ))}
    </Stack>
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState("");
  const [searchQuery] = useDebounce(query, 1000);
  const [platform, setPlatform] = React.useState<Source | "">("");

  const { data, loading } = useGetRequest<iCollectionUser[]>(
    `collection/${collection?.id}/users?pageNumber=${page + 1}&pageSize=${rowsPerPage}${searchQuery ? `&q=${searchQuery}` : ""}${
      platform == "facebook" || platform == "instagram" || platform == "linkedin" ? `&platform=${platform}` : ""
    }`
  );

  const rows =
    data?.result?.map((user) => ({
      user,
      userData: createData(
        user.id,
        user.name || "Not available",
        user.location || "Not available",
        getTags(user.tags) || "Not available",
        getSocialMediaLogos(user.sources) || "Not available"
      ),
    })) || [];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (p: Source) => {
    setPlatform(p);
  };

  return (
    <TableWrapper type={type}>
      <TableTitle>Your Results ({data?.total || "..."})</TableTitle>

      <Stack spacing={"30px"} p="10px 20px" direction={"row"} alignItems={"center"}>
        <Box maxWidth={210} width={"60%"}>
          <TextField onChange={(e) => setQuery(e.target.value)} notRounded placeholder="Search" />
        </Box>
        <Box maxWidth={140} width={"40%"}>
          <Select value={platform} onChange={(e) => handleChange(e.target.value as any)} required>
            <option value={""}>All</option>
            <option value={"instagram"}>Instagram</option>
            <option value={"facebook"}>Facebook</option>
          </Select>
        </Box>
      </Stack>

      {loading && !data?.result ? (
        <Stack width={"100%"} height={350} justifyContent={"center"} alignItems={"center"}>
          <CircularProgress />
        </Stack>
      ) : (
        <TableContainer sx={{ maxHeight: 440 }}>
          <MuiTable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableHeadCell
                    sx={{ bgcolor: "#F8FAFC" }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}{" "}
                    {index === 0 && (
                      <CaretUpDown weight="fill" style={{ transform: "translateY(5px)" }} size={20} color="#475569" />
                    )}
                  </TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map(({ user, userData: row }) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.location}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableBodyCell
                          onClick={() => {
                            setUserId(user.id);
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableBodyCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </MuiTable>
        </TableContainer>
      )}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data?.total || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableWrapper>
  );
}
