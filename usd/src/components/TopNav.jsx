import React from "react";
import { TopNavWrapper } from "./styled/TopNav";
import Search from "./Search";
import StaffProfile from "./StaffProfile";

function TopNav() {
  return (
    <TopNavWrapper>
      <Search />
      <StaffProfile />
    </TopNavWrapper>
  );
}

export default TopNav;
