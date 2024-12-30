import React from "react";
import { SharedRowFlex } from "./styled/Shared";
import { Avatar, UserInfo, UserName, UserRole } from "./styled/Profile";

function StaffProfile() {
  return (
    <SharedRowFlex className="profile-container">
      <Avatar
        src="https://images.pexels.com/photos/28871567/pexels-photo-28871567/free-photo-of-stylish-portrait-in-black-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="User avatar"
      />
      <UserInfo id="user-info">
        <UserName>Odunsi Oluwabukola</UserName>
        <UserRole>Graphics Designer</UserRole>
      </UserInfo>
    </SharedRowFlex>
  );
}

export default StaffProfile;
