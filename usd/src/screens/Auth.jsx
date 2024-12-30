import React from "react";
import {
  AuthFooter,
  AuthParagraph,
  UmeraLogo,
} from "../components/styled/Header";
import SignInForm from "../components/SignInForm";
import {
  SharedRowFlex,
  SharedFullScreenColumn,
} from "../components/styled/Shared";
import AuthLinks from "../components/AuthLinks";

function Auth() {
  return (
    <SharedFullScreenColumn className="auth-container">
      <UmeraLogo src="../../public/umera-logo.svg" width={120} />
      <p style={{ color: "white", fontWeight: "bold" }}>
        SIGN IN TO YOUR ACCOUNT
      </p>
      <SignInForm />
      <AuthLinks />
      <AuthFooter>
        <AuthParagraph>
          UMéRA Copyright &copy; Made with ❤️ by Oluwabukola Odunsi
        </AuthParagraph>
      </AuthFooter>
    </SharedFullScreenColumn>
  );
}

export default Auth;
