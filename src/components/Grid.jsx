import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import "../styles/grid.css";
import anime from "animejs";

import MatrixRain from "../components/MatrixRain";

function Grid() {
  const wrapper = useRef(null);
  let cols = 0,
    rows = 0,
    toggled = false;

  const colors = [
    "rgb(229, 57, 53)",
    "rgb(255, 87, 34)",
    "rgb(255, 152, 0)",
    "rgb(255, 193, 7)",
    "rgb(205, 220, 57)",
    "rgb(139, 195, 74)",
  ];

  let count = -1;

  useEffect(() => {
    let cols = 0,
      rows = 0,
      toggled = false;

    const toggle = () => {
      toggled = !toggled;
      //Do sum
    };

    const onClick = (index) => {
      count = count + 1;

      anime({
        targets: ".tile",
        backGroundColor: colors[count % (colors.length - 1)],
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
          grid: [cols, rows],
          from: index,
        }),
      });
    };

    const createTile = (index) => {
      const tile = document.createElement("div");

      tile.classList.add("tile");

      tile.style.opacity = toggled ? 0 : 1;

      tile.style.setProperty("--size", "100px")

      tile.addEventListener("click", (e) => onClick(index));
      return tile;
    };

    const createTiles = (quantity) => {
      Array.from(Array(quantity)).map((_, index) => {
        wrapper.current.appendChild(createTile(index));
      });
    };

    const createGrid = () => {
      wrapper.current.innerHTML = "";

      let size = document.body.clientWidth > 800 ? 100 : 50;


      cols = Math.floor(window.innerWidth / size);
      rows = Math.floor(window.innerHeight / size);

      wrapper.current.style.setProperty("--cols", cols);
      wrapper.current.style.setProperty("--rows", rows);

      createTiles(rows * cols);
    };

    createGrid();

    window.onresize = () => createGrid();
  }, [colors]);

  return (
    <div>
      <div ref={wrapper} className="tiles" />
    </div>
  );
}

export default Grid;
