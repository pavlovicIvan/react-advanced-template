// React, Router
import React from "react";
import { useHistory } from "react-router-dom";

// MUI
import Button from "@material-ui/core/Button";

const PageOne = () => {
  const history = useHistory();

  return (
    <>
      <Button color="primary" onClick={() => history.push("/")}>
        HOME
      </Button>
      <div>This is page one!</div>
    </>
  );
};

export default PageOne;
