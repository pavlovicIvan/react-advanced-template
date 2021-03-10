// React
import React from "react";

// Styling
import { ThemeProvider } from "@material-ui/core";
import "./style/App.css";
import theme from "./style/theme";

// Router
import MainRouter from "./Router";

const App = () => (
  <ThemeProvider theme={theme}>
    <MainRouter />
  </ThemeProvider>
);

export default App;
