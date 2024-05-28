import { Box, Typography, useTheme } from "@mui/material";
import { set } from "animejs";
import React, { useState, useEffect } from "react";

function MatrixRain() {
  const theme = useTheme();
  const [MatrixRainText, setMatrixRainText] = useState("");

  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "[",
    "]",
    "{",
    "}",
    "|",
    ";",
    ":",
    ",",
    ".",
    "/",
    "?",
    "<",
    ">",
    "`",
    "~",
  ];

  //Scale with mouse input?
  useEffect(() => {
    let interval;
    if (MatrixRainText.length < 25 + Math.random() * 20) {
      interval = setInterval(() => {
        const randomChar =
          characters[Math.floor(Math.random() * characters.length)];
        setMatrixRainText((prev) => prev + randomChar);
      }, 10 + Math.random() * 25);
    } else {
      setMatrixRainText("");
    }

    return () => clearInterval(interval);
  }, [MatrixRainText, characters]);

  return (
    <Box>
      {MatrixRainText.split("").map((char, index) => (
        <Typography
          style={{ position: "absolute", width: "100%", height: "100%" }}
          key={index}
          color={theme.palette.terminal.main}
        >
          {char}
        </Typography>
      ))}
    </Box>
  );
}

export default MatrixRain;
