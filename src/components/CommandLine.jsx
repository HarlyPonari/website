import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

function CommandLine() {
  const [buffer, setBuffer] = useState("");
  const [stdOut, setStdOut] = useState("");

  let history = []; // Store the history of commands or attempted commands

  const commands = {
    man: {
      man: "Displays the manual for a given command",
      cd: "Used to change the current directory",
      ls: "Lists the possible routes for navigation",
      help: "Displays a list of available commands",
      clear: "Clears the screen and scrubs the history",
    },
    cd: {
      home: "Navigate to the home page",
      about: "Navigate to the about page",
      projects: "Navigate to the projects page",
      contact: "Navigate to the contact page",
    },
    ls: "home, about, projects, contact",
    clear: "does something",
  };

  commands.help = `Available commands: ${Object.keys(commands).join(", ")}`;

  const handleInputChange = (event) => {
    setBuffer(event.target.value);
    //Do the autocomplete, as well as the dropdown menu for the available routes / pages
    //The dropdown menu should first show the available commands, then when someone types in the characters to a known command it should narrow the results further
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Split the buffer into command and arguments
      const parts = buffer.split(" ");
      const command = parts[0];
      const args = parts.slice(1);

      let commandOutput;

      // Handle commands that require arguments (e.g., 'man <command>')
      if (command === "man") {
        if (args.length === 0) {
          // If no arguments are passed, provide a general message or list all possible commands
          commandOutput =
            "Usage: man <command>. Available commands: " +
            Object.keys(commands.man).join(", ");
        } else {
          const targetCommand = args[0];
          if (commands["man"][targetCommand]) {
            commandOutput = commands["man"][targetCommand];
          } else {
            commandOutput = `No manual entry for ${targetCommand}`;
          }
        }
      } else if (commands[command]) {
        // Command recognized
        if (command === "cd") {
          // Check if the directory exists
          if (commands["cd"][args[0]]) {
            commandOutput = `Navigating to ${args[0]}...`;
            // Additional logic for handling navigation
          } else {
            commandOutput = `No such directory: ${args[0]}`;
          }
        } else {
          // Handle other commands without arguments or with different logic
        }
      } else {
        commandOutput = `Command not found: ${command}`;
      }

      setStdOut(commandOutput);
      setBuffer(""); // Clear the input after executing the command
    }
  };

  const handleFocus = (event) => {
    // Show the history of commands
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        transform: "translate(50%, 50%)",
        alignItems: "center",
        position: "relative",
        width: "50%",
        height: "50%",
        backgroundColor: "rgba(100,100,100,1)",
        borderRadius: "9px",
      }}
    >
      <TextField
        id="filled-basic"
        label="/home/user/harly/my-site"
        type="text"
        value={buffer}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        style={{ width: "100%" }}
        placeholder={stdOut}
        color="secondary"
      />
    </Box>
  );
}

export default CommandLine;
