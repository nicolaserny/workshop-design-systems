import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal, SignInModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowSignUpModal(!showSignUpModal)}
      >
        Toggle sign up modal
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowSignInModal(!showSignInModal)}
      >
        Toggle sign in modal
      </button>
      <div
        style={{
          background: useDarkTheme ? defaultTheme.primaryColor : "none",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <SignUpModal
          showModal={showSignUpModal}
          setShowModal={setShowSignUpModal}
        />
        <SignInModal
          showModal={showSignInModal}
          setShowModal={setShowSignInModal}
        />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
