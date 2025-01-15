import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Panel } from "../user-info";
import { Stack } from "@mui/material";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { AccordionTitle, ProfileLink } from "./styles";
import Tag from "../pill/Tag";

interface Props {
  handleChange: (panel: Panel) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: Panel | false;
  panel: Panel;
  profiles?: string[];
}

export default function Accordion({ handleChange, expanded, panel, profiles = [] }: Props) {
  return (
    <MuiAccordion
      onChange={handleChange(panel)}
      expanded={expanded === panel}
      sx={{
        border: "1px solid #E2E8F0",
        bgcolor: expanded === panel ? "#F8FAFC" : "white",
        borderRadius: "20px !important",
        boxShadow: "none",
        "&.MuiAccordion-root::before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<CaretDown weight="bold" size={24} color="#94A3B8" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Stack direction={"row"} alignItems={"center"} spacing={"8px"}>
          {panel === "Facebook" ? (
            <FacebookLogo size={24} weight="fill" />
          ) : panel === "Instagram" ? (
            <InstagramLogo size={24} weight="fill" />
          ) : (
            <LinkedinLogo size={24} weight="fill" />
          )}

          <AccordionTitle expanded={expanded === panel}>{panel}</AccordionTitle>
          <Tag scheme={{ color: "#4F46E5", bg: "#EEF2FF" }}>{profiles.length} Finds</Tag>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction={"row"} flexWrap={"wrap"} rowGap={"12px"}>
          {profiles.map((p) => (
            <ProfileLink target="_blank" href={p}>
              {p}
            </ProfileLink>
          ))}
        </Stack>
      </AccordionDetails>
    </MuiAccordion>
  );
}
