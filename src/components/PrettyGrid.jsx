import React, { useEffect, useRef } from "react";

import "../styles/grid.css";
import anime from "animejs";

function PrettyGrid() {
  const wrapper = useRef(null);

  useEffect(() => {
    let cols = 0,
      rows = 0,
      toggled = false;

    const toggle = () => {
      toggled = !toggled;
      
      //Make the background color appear and disappear
      anime({
        targets: "#tiles",
        backgroundColor: toggled ? "rgba(0,0,0, 0.0)" : "rgba(0,0,0, 0.9)",
        duration: 3000,
      });
    };

    const onClick = (index) => {
      toggle();

      anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
          grid: [cols, rows],
          from: index,
        }),
      });
    };

    const createTile = (index, size) => {
      const tile = document.createElement("div");

      tile.classList.add("tile");

      tile.style.opacity = toggled ? 0 : 1;

      tile.addEventListener("click", (e) => onClick(index));
      return tile;
    };

    const createTiles = (quantity, size) => {
      Array.from(Array(quantity)).map((_, index) => {
        wrapper.current.appendChild(createTile(index, size));
      });
    };

    const createGrid = () => {
      wrapper.current.innerHTML = "";

      const size = document.body.clientWidth > 800 ? 100 : 50;

      // console.log(document.body.clientWidth, document.body.clientHeight);

      cols = Math.floor(document.body.clientWidth / size);
      rows = Math.floor(document.body.clientHeight / size);

      // console.log("cols", cols, "rows", rows);

      wrapper.current.style.setProperty("--cols", cols);
      wrapper.current.style.setProperty("--rows", rows);

      createTiles(rows * cols, size);
    };

    createGrid();

    window.onresize = () => createGrid();
  }, []);

  return (
  <div ref={wrapper} id="tiles" />
);
}

export default PrettyGrid;
