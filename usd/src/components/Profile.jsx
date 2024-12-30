import React from 'react';
import { ProfileContainer,Avatar, UserContainer, UserInfo, UserName, Status, OnlineIndicator, DropdownIcon } from './styled/Profile';

const Profile = () => {
  return (
    <ProfileContainer>
      <UserContainer>
      <Avatar src="https://images.pexels.com/photos/28871567/pexels-photo-28871567/free-photo-of-stylish-portrait-in-black-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=800" alt="User avatar" />
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
