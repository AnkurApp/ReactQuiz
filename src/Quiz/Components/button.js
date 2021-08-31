import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#64D5FF",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "2px",
    margin: "2rem 0",

    "&:hover": {
      backgroundColor: "#37B6E5",
    },
  },
});

export default function QuizButton(props) {
  const { handle, btnText } = props;
  const classes = useStyles();
  return (
    <Button className={classes.btn} onClick={handle}>
      {btnText}
    </Button>
  );
}
