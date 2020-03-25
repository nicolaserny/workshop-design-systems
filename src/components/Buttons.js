import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
      font-size: ${typeScale.helperText};
      padding: 8px;
    `,
  large: () => `
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
      color: ${theme.textColorInverted};
    `,
  secondaryButtonWarning: ({ theme }) => `
      background: none;
      border: 2px solid ${theme.status.warningColor};
      color: ${theme.status.warningColor};
    `,
  tertiaryButtonWarning: ({ theme }) => `
      background: none;
      border: none;
      color: ${theme.status.warningColor};
    `,
  warning: ({ theme }) => `
      background-color: ${theme.status.warningColor};
      color: ${theme.textColorInverted};
      border: 2px solid ${theme.status.warningColor};
      
      &:hover, &:focus {
        border: 2px solid ${theme.status.warningColorHover};
        background-color: ${theme.status.warningColorHover};
        outline: none;
      }
  
      &:active {
        border: 2px solid ${theme.status.warningColorActive};
        background-color: ${theme.status.warningColorActive};
        outline: none;
      }
    `,
  primaryButtonError: ({ theme }) => `
      background-color: ${theme.status.errorColor};
      color: ${theme.textColorInverted};
    `,
  secondaryButtonError: ({ theme }) => `
      background: none;
      border: 2px solid ${theme.status.errorColor};
      color: ${theme.status.errorColor};
    `,
  tertiaryButtonError: ({ theme }) => `
      background: none;
      border: none;
      color: ${theme.status.errorColor};
    `,
  error: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
    border: 2px solid ${theme.status.errorColor};
  
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      border: 2px solid ${theme.status.errorColorHover};
      outline: none;
    }
  
    &:active {
      background-color: ${theme.status.errorColorActive};
      border: 2px solid ${theme.status.errorColorActive};
      outline: none;
    }
    `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ theme }) => `
    background: none;
    border: 2px solid ${theme.status.successColor};
    color: ${theme.status.successColor};
  `,
  tertiaryButtonSuccess: ({ theme }) => `
    background: none;
    border: none;
    color: ${theme.status.successColor};
  `,
  success: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
    border: 2px solid ${theme.status.successColor};
  
    &:hover, &:focus {
      border: 2px solid ${theme.status.successColorHover};
      background-color: ${theme.status.successColorHover};
      outline: none;
    }
  
    &:active {
      border: 2px solid ${theme.status.successColorActive};
      background-color: ${theme.status.successColorActive};
      outline: none;
    }
    `
};

const Button = styled.button`
  padding: 8px 32px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  border: 2px solid ${props => props.theme.primaryColor};
  min-width: 100px;
  cursor: pointer;
  font-family: ${props => props.theme.primaryFont}
  transition: background-color 0.2s linear color 0.2s linear;

  &:hover {
      background-color: ${props => props.theme.primaryColorHover};
      color: ${props => props.theme.textColorOnPrimary};
      border: 2px solid ${props => props.theme.primaryColorHover};
  };

  &:focus {
      outline: none;
      background-color: ${props => props.theme.primaryColorActive};
      color: ${props => props.theme.textColorOnPrimary};
      border: 2px solid ${props => props.theme.primaryColorActive};
  };

  &:active {
      outline: none;
      background-color: ${props => props.theme.primaryColorActive};
      color: ${props => props.theme.textColorOnPrimary};
      border: 2px solid ${props => props.theme.primaryColorActive};
  };


`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabledInverted};
    border: 2px solid ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.primaryColor};
  &:disabled {
    background-color: none;
    color: ${props => props.theme.textOnDisabled};
    border: 2px solid ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background-color: none;
  color: ${props => props.theme.primaryColor};
  border: none;
  &:disabled {
    background-color: none;
    color: ${props => props.theme.textOnDisabled};
    border: 2px solid ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
