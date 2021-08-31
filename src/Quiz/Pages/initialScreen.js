import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

import Cards from "../Components/Card";
import QuizButton from "../Components/button";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    padding: "2rem",
    backgroundColor: "#8BDFFF",
  },

  heading: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
});
export default function StartQuiz() {
  const classes = useStyles();
  const history = useHistory();

  const quizStart = () => {
    history.push("/question");
  };

  return (
    <Box className={classes.mainContainer}>
      <Cards>
        <Typography variant="h4" className={classes.heading}>
          {"React Quiz"}
        </Typography>
        <Typography variant="h5" className={classes.heading}>
          {"Take the Quiz"}
        </Typography>

        <QuizButton handle={quizStart} btnText={"Start"} />
      </Cards>
    </Box>
  );
}
