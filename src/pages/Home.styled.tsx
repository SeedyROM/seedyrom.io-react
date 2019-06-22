import styled from "styled-components";
import color from "color";

import colors from "../theme/colors";

export const Container = styled.div`
  position: relative;
  background-color: ${colors.orange};
  color: #f3f3f3;
  min-height: 100vh;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-bottom: 2rem;

  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 100%;
`;

export const LinkBackground = styled.div`
  z-index: 1;
  background: ${colors.blue};
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;

  right: 100%;

  transition: right 0.3s ease-in-out;

  &.hover {
    right: 0;
  }
`;

export const LinkBody = styled.div`
  z-index: 2;
  font-family: Barlow, sans-serif;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;

  display: inline-block;
  position: relative;

  font-size: 4em;
  margin-bottom: 1.25rem;
  padding: 0 2rem;
  line-height: 1;

  color: ${colors.white};

  text-align: left;

  transition: 
    letter-spacing 0.5s ease-in-out,
    color 0.3s ease-in-out;

  &:last-child {
    margin-bottom: 0.133em;
  }

  &:hover {
    cursor: pointer;
    color: ${color(colors.orange).lighten(0.4).hex()};

    letter-spacing: 0.05em;
  }
`;