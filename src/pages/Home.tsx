import React, { useEffect, useState } from "react";
import { PoseGroup } from 'react-pose';

import { Loading } from "../components/Loading";
import { FadeIn } from '../helpers/animations';


const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  console.log(loading);

  return (
    <>
      <PoseGroup>
        { (loading) ? (
          <FadeIn initialPose="exit" key="loading">
            <Loading />
          </FadeIn>
        ) : (
          <FadeIn delayIn={300} duration={300} key="message">
            Hello
          </FadeIn>
        )}
      </PoseGroup>
    </>
  )
};

export default Home;