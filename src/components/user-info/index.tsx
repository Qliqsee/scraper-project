import { Box, Stack } from "@mui/material";
import React from "react";
import { TableTitle } from "../table/styles";
import { X } from "@phosphor-icons/react/dist/ssr";
import { CampaignContribution, CampaignName, UserinfoSectionTitle, UserinfoWrapper } from "./styles";
import { TextField } from "../input/TextField";
import Accordion from "../accordion";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useGlobalContext } from "@/context/GlobalContext";
import useGetRequest from "@/apiRequests/useGetRequest";
import { iUser } from "@/utils/types/globals.type";
import Tag from "../pill/Tag";

export type Panel = "Facebook" | "Instagram" | "Linkedin" | "";

function truncateString(inputString: string, maxLength = 20) {
  if (inputString.length > maxLength) {
    // Truncate the string and append '...'
    return inputString.slice(0, maxLength) + "...";
  }
  // Return the input string if it's not too long
  return inputString;
}

const UserInfo = () => {
  const { setUserId, userId } = useGlobalContext();

  const { data } = useGetRequest<iUser>(`user/${userId}`);

  const user = data?.result;

  const [expanded, setExpanded] = React.useState<Panel | false>(false);

  const handleChange = (panel: Panel) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const reset = () => {
    setUserId(null);
  };

  return (
    <UserinfoWrapper>
      <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} pr="20px">
        <TableTitle>Details</TableTitle>
        <X cursor={"pointer"} onClick={reset} color="#475569" size={20} />
      </Stack>

      <Stack mt="40px" direction={"row"} columnGap={"40px"} rowGap={"12px"}>
        <Box width={"35%"}>
          <TextField value={user?.name} label="Full name" />
        </Box>
        <Box width={"35%"}>
          <TextField value={user?.location || ""} label="Location" />
        </Box>
      </Stack>

      <Stack spacing={"12px"} borderTop={"1px solid #CBD5E1"} pt="16px" mt="24px">
        <UserinfoSectionTitle>Possible Social Profile</UserinfoSectionTitle>
        <Accordion
          profiles={user?.facebookProfiles?.map((f) => f?.uri)}
          expanded={expanded}
          handleChange={handleChange}
          panel="Facebook"
        />
        <Accordion
          profiles={user?.instagramProfiles?.map((i) => i?.uri)}
          expanded={expanded}
          handleChange={handleChange}
          panel="Instagram"
        />
        <Accordion
          profiles={user?.linkedinProfiles?.map((i) => i?.uri)}
          expanded={expanded}
          handleChange={handleChange}
          panel="Linkedin"
        />
      </Stack>

      <Stack spacing={"12px"} borderTop={"1px solid #CBD5E1"} pt="16px" mt="24px">
        <UserinfoSectionTitle>Donation History</UserinfoSectionTitle>
        <Stack direction={"row"} flexWrap={"wrap"} rowGap={"12px"}>
          {user?.gofundmeDonations?.map((d) => (
            <Campaign
              name={truncateString(d?.donationName, 40)}
              url={d?.donationUrl}
              contribution={d?.donationAmount}
              matchConfidence={d.matchConfidence}
            />
          ))}
        </Stack>
        <UserinfoSectionTitle>Petition History</UserinfoSectionTitle>
        <Stack direction={"row"} flexWrap={"wrap"} rowGap={"12px"}>
          {user?.changedotorgPetitions?.map((p) => (
            <Campaign
              name={truncateString(p?.petitionName, 40)}
              url={p?.petitionUrl}
              contribution={truncateString(p?.petitionComment)}
              matchConfidence={p.matchConfidence}
            />
          ))}
        </Stack>
      </Stack>
    </UserinfoWrapper>
  );
};

export default UserInfo;

const Campaign = ({
  name,
  contribution,
  matchConfidence,
  url,
}: {
  name: string;
  url: string;
  matchConfidence: "high" | "medium" | "low";
  contribution?: string;
}) => {
  return (
    <Stack rowGap={"4px"} width={"30%"} mr="10px">
      <CampaignName target="_blank" href={url}>
        {name} <ArrowSquareOut size={15} color="#94A3B8" />{" "}
      </CampaignName>
      <CampaignContribution>{contribution || "Undisclosed"}</CampaignContribution>
      {matchConfidence === "high" ? (
        <Tag scheme={{ bg: "#F0FDF4", color: "#22C55E" }}>High</Tag>
      ) : matchConfidence === "medium" ? (
        <Tag scheme={{ bg: "#FFFBEB", color: "#F59E0B" }}>Medium</Tag>
      ) : (
        <Tag scheme={{ bg: "#FFF1F2", color: "#F43F5E" }}>Low</Tag>
      )}
    </Stack>
  );
};
