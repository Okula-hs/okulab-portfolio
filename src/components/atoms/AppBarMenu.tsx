import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const StyledAppBarMenu = withStyles({
  root: {
    background: "#F3F1F1",
    borderRadius: 0,
    border: 0,
    padding: 0,
    minHeight: 64,
    justifyContent: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Card);
const useStyles = makeStyles({
  title: {
    paddingLeft: 8,
    paddingRight: 8,
  },
});

type Props = {
  string: React.ReactNode;
};
const AppBarMenu = (props: Props) => {
  const classes = useStyles();
  return (
    <StyledAppBarMenu variant="outlined">
      <CardActionArea style={{ width: "100%", height: "100%" }}>
        <Box className={classes.title}>
          <Typography variant="h6">{props.string}</Typography>
        </Box>
      </CardActionArea>
    </StyledAppBarMenu>
  );
};

export default AppBarMenu;
