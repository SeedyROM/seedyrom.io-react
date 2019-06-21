import React, { useEffect, useState } from "react";

import { Loading } from "../components/Loading";
import posed, { PoseGroup } from 'react-pose';

const Message = posed.div({
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
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <>
      <PoseGroup>
        {loading && (<Loading key="loading" />)}
        <Message key="message" />
      </PoseGroup>
    </>
  )
};

export default Home;