import React, { useState, useEffect } from "react";
import {
  BsColumnsGap,
  BsBarChart,
  BsInbox,
  BsFolder2Open,
  BsPlusCircle,
  BsJournals,
  BsArrow90DegRight,
} from "react-icons/bs";
import {
  SideBarStyle,
  SideBarItemContainer,
  SideBarSection,
} from "./styled/SideBar";
import { Span } from "./styled/Text";
import Profile from "./Profile";
import Buttons from "./Buttons";
import StaffProfile from "./StaffProfile";
import { UmeraLogo } from "./styled/Header";

function SideBar() {
  const sideBar = [
    {
      to: "home",
      icon: <BsColumnsGap size={20} />,
      name: "Home",
    },
    {
      to: "task",
      icon: <BsJournals size={20} />,
      name: "Task",
    },
    {
      to: "inbox",
      icon: <BsInbox size={20} />,
      name: "Inbox",
    },
    {
      to: "Report",
      icon: <BsBarChart size={20} />,
      name: "Report",
    },
  ];

  return (
    <SideBarStyle>
      <div>
        <UmeraLogo src="../../public/umera-logo.svg" width={100} />
      </div>
      <SideBarSection>
        {sideBar.map((items, index) => {
          return (
            <SideBarItemContainer to={items.to} key={index}>
              {items.icon}
              <Span className="removeSideBarSpan">{items.name}</Span>
            </SideBarItemContainer>
          );
        })}
      </SideBarSection>

      <SideBarSection>
        <StaffProfile />
        <Buttons
          label="Logout"
          icon={<BsArrow90DegRight />}
          className="logout"
        />
      </SideBarSection>
    </SideBarStyle>
  );
}

export default SideBar;
