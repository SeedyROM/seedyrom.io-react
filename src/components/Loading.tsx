import styled from "styled-components";
import React from 'react';
import posed from "react-pose";
import { easing } from "popmotion";
import colors from '../theme/colors';
import breakpoints from "../theme/breakpoints";

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.blue};
  color: ${colors.white};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding-bottom: 7em;
  }
`;

export const LoadingBarAnimation = posed.div({
  showing: {
    width: '100vw',
    transition: {
      duration: 1000,
      ease: easing.cubicBezier(.54,.1,.28,.93),
    },
    delay: 500,
  },
  hidden: {
    width: '0vw',
  },
});

export const LoadingBar = styled(LoadingBarAnimation)`
  background: ${colors.white};
  position: fixed;
  height: 5px;
  top: calc(75vh - 50px);
  left: 0;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: 15px;
  }
`;

const LoadingIcon = posed.div({
  showing: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    lineHeight: 0,
    transition: {
      opacity: {
        duration: 500,
        type: 'spring',
        stiffness: 150,
      },
      scale: {
        duration: 500,
        type: 'spring',
        stiffness: 150,
      },
      rotateZ: {
        duration: 1000,
        type: 'keyframes',
        values: [0, 360],
        easings: [easing.linear],
        loop: 2,
      },
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
});

const Icon = styled.div`
  img {
    width: 100px;
    height: 100px;
    
    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: 125px;
      height: 125px;
    }
  }
`;

export const Loading: React.FC<any> = (props) => (
  <LoadingOverlay role="alertdialog" aria-busy="true">
    <LoadingIcon initialPose="hidden" pose="showing">
      <Icon>
        <img src="/icons/cd.svg" alt="Loading..." />
      </Icon>
    </LoadingIcon>
    <LoadingBar initialPose="hidden" pose="showing" />
  </LoadingOverlay>
);