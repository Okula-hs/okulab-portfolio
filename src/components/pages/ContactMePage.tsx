import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";

const ContactMeComponent = () => {
  return (
    <Grid container justify="center" direction="column">
      <Grid item>
        <Typography variant="h3">Contact Me</Typography>
      </Grid>
      <Grid item>
        <SentimentVeryDissatisfiedOutlinedIcon style={{ fontSize: 120 }} />
      </Grid>
      <Grid item>
        <Typography>現在作成中です。少々お待ちください。。。</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactMeComponent;
