// React, Router
import React from "react";
import { useHistory } from "react-router-dom";

// MUI
import Button from "@material-ui/core/Button";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Button color="primary" onClick={() => history.push("/pageOne")}>
        PAGE ONE
      </Button>
      <Button color="primary" onClick={() => history.push("/pageTwo")}>
        PAGE TWO
      </Button>
      <div>This is homepage!</div>
    </>
  );
};

export default Home;
