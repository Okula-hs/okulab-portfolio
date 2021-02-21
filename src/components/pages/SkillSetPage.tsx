import React, { ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px 32px 0 32px",
    },
  })
);

type ChartData = {
  subject: string;
  A: number;
};

const languageData: ChartData[] = [
  {
    subject: "React",
    A: 100,
  },
  {
    subject: "Python/Flask",
    A: 100,
  },
  {
    subject: "Node.js",
    A: 60,
  },
  {
    subject: "Vue",
    A: 60,
  },
  {
    subject: "VB.net/VBA",
    A: 90,
  },
  {
    subject: "SQL",
    A: 80,
  },
];
const InfraData: ChartData[] = [
  {
    subject: "AWS",
    A: 90,
  },
  {
    subject: "Oracle",
    A: 90,
  },
  {
    subject: "MySQL",
    A: 90,
  },
  {
    subject: "DynamoDB\n(NoSQL)",
    A: 80,
  },
  {
    subject: "SQLite",
    A: 80,
  },
  {
    subject: "SQL Server",
    A: 90,
  },
];

type Props = {
  data: ChartData[];
  title: string;
};
const Chart = (props: Props) => {
  return (
    <Grid container xs={12} md={6} justify="center">
      <Grid item>
        <Typography>{props.title}</Typography>
        <ResponsiveContainer width={400} height={300}>
          <RadarChart outerRadius="50%" data={props.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              dataKey="A"
              stroke="#E76F53"
              fill="#E76F53"
              fillOpacity={0.8}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};
const SkillSetComponent = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      spacing={2}
      className={classes.root}
    >
      <Typography variant="h3">Skill Set</Typography>
      <Grid>
        <Typography>これまでの経験をまとめてみました！</Typography>
        <Typography>特にTypescript(React),Pythonに自信があります </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={2}
        className={classes.root}
      >
        <Chart data={languageData} title="言語" />
        <Chart data={InfraData} title="フレームワーク" />
      </Grid>
    </Grid>
  );
};

export default SkillSetComponent;
