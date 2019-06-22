import React, { useEffect, useState } from "react";
import { PoseGroup } from "react-pose";

import { Loading } from "../components/Loading";
import { LinkBackground, LinkBody, LinksContainer, Container } from "./Home.styled";
import { FadeIn } from "../helpers/animations";

interface LinkProps {
  title: string;
}

const Link: React.FC<LinkProps> = props => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: `${props.title.length * 4}em`,
        marginBottom: "0.5rem",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >  
      <LinkBackground className={(hover) ? "hover" : ""} />
      <LinkBody>{props.title}</LinkBody>
    </div>
  );
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <Container>
      <PoseGroup>
        {loading ? (
          <FadeIn initialPose="exit" key="loading">
            <Loading />
          </FadeIn>
        ) : (
          <FadeIn delayIn={300} duration={300} key="message">
            <LinksContainer>
              <Link title="Work" />
              <Link title="Art" />
              <Link title="Code" />
            </LinksContainer>
          </FadeIn>
        )}
      </PoseGroup>
    </Container>
  );
};

export default Home;
