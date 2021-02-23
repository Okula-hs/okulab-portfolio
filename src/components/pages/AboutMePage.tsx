import React, { ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DesktopMacOutlinedIcon from "@material-ui/icons/DesktopMacOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px 32px 0 32px",
    },
    paper: {
      width: "80%",
    },
    items: {
      paddingBottom: 40,
    },
  })
);

type GirdItemProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  texts: ReactNode;
};
const GridItem = (props: GirdItemProps) => {
  const classes = useStyles();
  return (
    <Grid container xs={12} md={4} justify="center" className={classes.items}>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography color="textSecondary">{props.subtitle}</Typography>
        {props.icon}
        {props.texts}
      </Paper>
    </Grid>
  );
};

const Texts = [
  {
    title: "エンジニア",
    subtitle: "Enginners",
    icon: <DesktopMacOutlinedIcon style={{ fontSize: 80, color: "#888888" }} />,
    texts: (
      <Typography variant={"body2"}>
        文系出身、歴5年目のエンジニアです。社会人からプログラミングを始めましたが、楽しさに感動しながら日々過ごしています。最近はWebアプリ/モバイルアプリの開発を行なっています。
      </Typography>
    ),
  },
  {
    title: "保有資格",
    subtitle: "Qualifications",
    icon: (
      <AssignmentIndOutlinedIcon style={{ fontSize: 80, color: "#888888" }} />
    ),
    texts: (
      <>
        <Typography variant={"body2"}>・基本情報処理試験</Typography>
        <Typography variant={"body2"}>・応用情報処理試験</Typography>
        <Typography variant={"body2"}>
          ・AWSソリューションアーキテクト
        </Typography>
        <Typography variant={"body2"}>
          AWS資格と高度情報処理資格の取得に向けて、現在勉強中・・・
        </Typography>
      </>
    ),
  },
  {
    title: "リンク",
    subtitle: "Links",
    icon: <LinkOutlinedIcon style={{ fontSize: 80, color: "#888888" }} />,
    texts: (
      <>
        <Typography variant={"body2"}>
          ・Qiita:
          <a href="https://qiita.com/okula-hs">https://qiita.com/okula-hs</a>
        </Typography>
        <Typography variant={"body2"}>
          ・GitHub：
          <a href="https://github.com/Okula-hs">https://github.com/Okula-hs</a>
        </Typography>
        <Typography variant={"body2"}>・Twitter：作成中</Typography>
      </>
    ),
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
        <GridItem {...Texts[1]} />
        <GridItem {...Texts[2]} />
      </Grid>
    </Grid>
  );
};

export default AbountMeComponent;
