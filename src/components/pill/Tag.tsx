import React, { useMemo } from "react";
import { TagWrapper } from "./styles";

const randomBgColorCombo = [
  { backgroundColor: "#F0FDF4", color: "#22C55E" },
  { backgroundColor: "#F8FAFC", color: "#475569" },
  { backgroundColor: "#FFF1F2", color: "#F43F5E" },
  { backgroundColor: "#FFFBEB", color: "#F59E0B" },
  { backgroundColor: "#EEF2FF", color: "#4F46E5" },
];

const Tag = ({ children, scheme }: { children: any; scheme?: { bg: string; color: string } }) => {
  const style = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * randomBgColorCombo.length);
    return randomBgColorCombo[randomIndex];
  }, []);

  return (
    <TagWrapper color={scheme?.color || style.color} bgcolor={scheme?.bg || style.backgroundColor}>
      {children}
    </TagWrapper>
  );
};

export default Tag;
