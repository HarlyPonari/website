import React from "react";
import MatrixCloud from "./MatrixCloud";
import PrettyGrid from "./PrettyGrid";
import CommandLine from "./CommandLine";

import "../styles/home.css";


function HomePage() {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
      }}
    >
      {/* Loop some VERY calm piano */}
      <MatrixCloud />
      <CommandLine />
      {/* Now we must create a CLI for the user to navigate.
          When a user clicks on the CLI, they can either type in the command or click the dropdown menu for the available routes / pages.
      */}
      
      {/* <PrettyGrid /> */}

    </div>
  );
}

export default HomePage;
