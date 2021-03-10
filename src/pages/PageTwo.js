// React, Router
import React from "react";
import { useHistory } from "react-router-dom";

// MUI
import Button from "@material-ui/core/Button";

const PageTwo = () => {
  const history = useHistory();

  return (
    <>
      <Button color="primary" onClick={() => history.push("/")}>
        HOME
      </Button>
      <div>This is page two!</div>
    </>
  );
};

export default PageTwo;
