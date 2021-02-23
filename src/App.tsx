import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AbountMeComponent from "./components/pages/AboutMePage";
import SkillSetComponent from "./components/pages/SkillSetPage";
import ContactMeComponent from "./components/pages/ContactMePage";
import { CustomizeBar } from "./components/organisms/Organisms";

const styles = {
  root: {
    minHeight: "100vh",
  },
  top: {
    minHeight: "100vh",
    backgroundColor: "#f1b9ba",
  },
};

function App() {
  return (
    <div className="App">
      <CustomizeBar />
      <Grid container direction="column" spacing={0}>
        {/* TOP */}
        <Grid container alignItems="center" style={styles.top} id="id_top">
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h3">ようこそ</Typography>
            <Typography variant="body1">
              Welcome to Okula Portfolio Site
            </Typography>
          </Container>
        </Grid>

        {/* About Me */}
        <Grid
          container
          alignItems="center"
          style={styles.root}
          id="id_abount_me"
        >
          <AbountMeComponent />
        </Grid>

        {/* Skill Set */}
        <Grid
          container
          alignItems="center"
          style={styles.root}
          id="id_skill_set"
        >
          <SkillSetComponent />
        </Grid>

        {/* Contact Me */}
        <Grid
          container
          alignItems="center"
          style={styles.root}
          id="id_contact_me"
        >
          <ContactMeComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
