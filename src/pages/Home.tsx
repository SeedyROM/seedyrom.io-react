import React, { useEffect, useState } from "react";

import { Loading } from "../components/Loading";
import posed, { PoseGroup } from 'react-pose';

const FadeIn = posed.div({
  exit: {
    opacity: 0,
  },

  enter: {
    opacity: 1,
  }
});

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  console.log(loading);

  return (
    <>
      <PoseGroup>
        { loading && (
          <FadeIn key="loading">
            <Loading />
          </FadeIn>
        )}
        <FadeIn key="message">
          Hello
        </FadeIn>
      </PoseGroup>
    </>
  )
};

export default Home;