import React from "react";
import {
  AuthLinksContainer,
  AuthLink,
  AuthLinksMainDiv,
} from "./styled/Header";

const l = [
  ["NEW STAFF", "CORE VALUES"],
  ["RESET PASSWORD", "CREATE PASSWORD"],
];

function AuthLinks() {
  return (
    <AuthLinksContainer>
      {l.map((items, index) => {
        return (
          <AuthLinksMainDiv key={index}>
            {items.map((list) => (
              <AuthLink>{list}</AuthLink>
            ))}
          </AuthLinksMainDiv>
        );
      })}
    </AuthLinksContainer>
  );
}

export default AuthLinks;
