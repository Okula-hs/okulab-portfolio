import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { AppBarMenu, AppBarMenuMobile } from "../atoms/AppBarMenu";

import logoMini from "../../Logo_mini.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    growItem: {
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    img: {
      height: 32,
    },
    toolbar: {
      justifyContent: "center",
    },
  })
);

export const CustomizeBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logoMini} className={classes.img} alt="logo" />
          <Typography className={classes.title} variant="h6">
            OcuLab
          </Typography>

          <div className={classes.growItem} />
          <div className={classes.sectionDesktop}>
            <AppBarMenu string="TOP" id="#id_top" />
            <AppBarMenu string="About Me" id="#id_abount_me" />
            <AppBarMenu string="Skill Set" id="#id_skill_set" />
            <AppBarMenu string="Contact Me" id="#id_contact_me" />
          </div>
        </Toolbar>
        <div className={classes.sectionMobile}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <AppBarMenuMobile string="TOP" id="#id_top" />
            </Grid>
            <Grid item xs={6}>
              <AppBarMenuMobile string="About Me" id="#id_abount_me" />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              <AppBarMenuMobile string="Skill Set" id="#id_skill_set" />
            </Grid>
            <Grid item xs={6}>
              <AppBarMenuMobile string="Contact Me" id="#id_contact_me" />
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </div>
  );
};
