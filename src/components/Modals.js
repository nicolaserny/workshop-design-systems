import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { useSpring, animated, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h2`
  font-size: ${typeScale.header2};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  });
  return (
    showModal && (
      <animated.div style={animation}>
        <ModalWrapper>
          <img
            src={Illustrations.SignUp}
            alt="Sign up today to get access!"
            aria-hidden="true"
          />
          <SignUpHeader>Sign Up</SignUpHeader>
          <SignUpText>Sign up today to get access to cool things!</SignUpText>
          <PrimaryButton>Sign up!</PrimaryButton>
          <CloseModalButton aria-label="Close modal">
            <CloseIcon />
          </CloseModalButton>
        </ModalWrapper>
      </animated.div>
    )
  );
};

const SignInHeader = styled.h2`
  font-size: ${typeScale.header2};
  width: 85%;
  margin-bottom: 50px;
  margin-top: -10px;
`;

const SignInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  flex-direction: row;
`;

const SignInLeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SignInButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SignInLabel = styled.label`
  font-size: ${typeScale.helperText};
  color: ${props => props.theme.textOnFormLabel};
`;

const SignInInput = styled.input`
  background: ${props => props.theme.formInputBackground};
  color: ${props => props.theme.textOnInput};
  font-size: ${typeScale.paragraph};
  line-height: 19px;
  font-style: normal;
  font-weight: normal;
  padding-left: 11.5px;
  margin-top: -15px;
  width: 300px;
  height: 52px;
  border: 2px solid ${props => props.theme.formInputBackground};
  border-radius: 2px;
`;

export const SignInModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  });
  return (
    showModal && (
      <animated.div style={animation}>
        <ModalWrapper>
          <SignInHeader>Sign In</SignInHeader>
          <SignInContainer>
            <SignInLeftContainer>
              <SignInLabel htmlFor="email">Email</SignInLabel>
              <SignInInput
                id="email"
                type="text"
                defaultValue="workshop@email.com"
              />
              <SignInLabel htmlFor="password">Password</SignInLabel>
              <SignInInput id="password" type="password" defaultValue="test" />
              <SignInButtonContainer>
                <SecondaryButton>Sign up</SecondaryButton>
                <PrimaryButton>Sign up</PrimaryButton>
              </SignInButtonContainer>
            </SignInLeftContainer>
            <img src={Illustrations.SignIn} alt="Sign in" aria-hidden="true" />
          </SignInContainer>
          <CloseModalButton aria-label="Close modal">
            <CloseIcon />
          </CloseModalButton>
        </ModalWrapper>
      </animated.div>
    )
  );
};
