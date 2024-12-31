import React, { useState } from "react";
import {
  ProfileContainer,
  Avatar,
  UserContainer,
  UserInfo,
  UserName,
  Status,
  OnlineIndicator,
  DropdownIcon,
  AvatarSpan,
} from "./styled/Profile";

const Profile = () => {
  const [imageURL, setImageURL] = useState(false);
  const name = "bukola";

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join("");
  };

  return (
    <ProfileContainer>
      <UserContainer>
        {imageURL ? (
          <Avatar
            src="https://images.pexels.com/photos/28871567/pexels-photo-28871567/free-photo-of-stylish-portrait-in-black-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="User avatar"
          />
        ) : (
          <AvatarSpan>{getInitials(name)}</AvatarSpan>
        )}
        <UserInfo>
          <UserName>Odunsi Oluwabukola</UserName>
          <Status>
            <OnlineIndicator />
            Online
          </Status>
        </UserInfo>
      </UserContainer>
      <DropdownIcon />
    </ProfileContainer>
  );
};

export default Profile;
