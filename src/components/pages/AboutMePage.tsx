import React, { ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import DesktopMacOutlinedIcon from "@material-ui/icons/DesktopMacOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px 32px 0 32px",
    },
    paper: {
      //   height: 140,
      width: "80%",
      //   backgroundColor: "pink",
    },
  })
);

type GirdItemProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  text: string;
};
const GridItem = (props: GirdItemProps) => {
  const classes = useStyles();
  return (
    <Grid container xs={4} justify="center">
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography color="textSecondary">{props.subtitle}</Typography>
        {props.icon}
        <Typography variant={"body2"}>{props.text}</Typography>
      </Paper>
    </Grid>
  );
};

const Texts = [
  {
    title: "エンジニア",
    subtitle: "Enginners",
    icon: <DesktopMacOutlinedIcon style={{ fontSize: 80, color: "#888888" }} />,
    text:
      "ここに説明文を書きます。ああああああああああああああああああああああああああああああああああああああああああああああ",
  },
];

const AbountMeComponent = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography variant="h3">Abount Me</Typography>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={2}
        className={classes.root}
      >
        <GridItem {...Texts[0]} />
        <GridItem {...Texts[0]} />
        <GridItem {...Texts[0]} />
      </Grid>
    </Grid>
  );
};

export default AbountMeComponent;
