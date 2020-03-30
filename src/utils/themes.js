import { cyan, neutral, yellow, red, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: cyan[500],
  primaryColorHover: cyan[400],
  primaryColorActive: cyan[200],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[400],
  textOnFormLabel: neutral[400],
  textOnInput: neutral[500],
  textOnDisabledInverted: neutral[300],
  formInputBackground: neutral[200],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[500],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};

export const darkTheme = {
  primaryColor: neutral[500],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[300],
  textColorOnPrimary: cyan[300],
  textColor: cyan[300],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[400],
  textOnFormLabel: neutral[400],
  textOnInput: neutral[500],
  textOnDisabledInverted: neutral[300],
  formElementBackground: cyan[200],
  formInputBackground: neutral[200],
  textOnFormElementBackground: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};
