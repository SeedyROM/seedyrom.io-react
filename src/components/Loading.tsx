import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import posed, { PoseGroup } from "react-pose";
import { easing } from "popmotion";

import cd from "../assets/cd.svg";

const LoadingOverlayAnimation = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
});

export const LoadingOverlay = styled(LoadingOverlayAnimation)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #153DAD;
  color: #f3f3f3;
`;

export const LoadingBarAnimation = posed.div({
  showing: {
    width: '100vw',
    transition: {
      duration: 1000,
      ease: 'easeInOut'
    }
  },
  hidden: {
    width: '0vw',
  },
});

export const LoadingBar = styled(LoadingBarAnimation)`
  background: #f3f3f3;
  position: fixed;
  height: 5px;
  top: 75vh;
  left: 0;
`;

const LoadingIconAnimation = posed.div({
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

const LoadingIcon = styled(LoadingIconAnimation)`
  line-height: 0;
`;

const loadingPose = (v: boolean) => (v) ? "enter" : "exit"; 

export const Loading: React.FC = () => (
  <LoadingOverlay>
    <LoadingIconAnimation initialPose="hidden" pose="showing">
      <img width="100" height="100" src={cd} alt="Loading..." />
    </LoadingIconAnimation>
    <LoadingBar initialPose="hidden" pose="showing" />
  </LoadingOverlay>
);