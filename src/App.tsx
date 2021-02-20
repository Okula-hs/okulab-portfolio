import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AbountMeComponent from "./components/pages/AboutMePage";
import { CustomizeBar } from "./components/organisms/Organisms";

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    top: {
      backgroundColor: "#f1b9ba",
    },
  });
});

const styles = {
  root: {
    height: "100vh",
  },
  top: {
    height: "100vh",
    backgroundColor: "#f1b9ba",
  },
};

function App() {
  return (
    <div className="App">
      <CustomizeBar />
      <Grid container direction="column" spacing={0}>
        {/* TOP */}
        <Grid container alignItems="center" style={styles.top}>
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h3">ようこそ！</Typography>
            <Typography variant="body1">
              このサイトは、「オークラ」のWebサイトです
            </Typography>
            <Typography variant="body1">
              ポートフォリオとしての第1作です。
            </Typography>
          </Container>
        </Grid>

        {/* About Me */}
        <Grid container alignItems="center" style={styles.root}>
          <AbountMeComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
