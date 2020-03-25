import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M3.23787 23.0194L11.5 14.5733L19.7621 23.0194L22.5576 20.183L14.2333 11.8L22.5576 3.41698L19.7621 0.580612L11.5 9.02667L3.23787 0.580612L0.442413 3.41698L8.76666 11.8L0.442413 20.183L3.23787 23.0194Z"
      fill="black"
      fill-opacity="0.59"
    />
  </CloseIconWrapper>
);
