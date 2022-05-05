import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFD93D",
    },
  },
});
const Filter = (props) => {

  function handleMonday() {
    props.setActiveDay({
      "monday": true,
      "tuesday": false,
      "wednesday": false,
      "thursday": false,
      "friday": false,

    })
    props.heatMapMonday()
  }

  function handleTuesday() {
    props.setActiveDay({
      "monday": false,
      "tuesday": true,
      "wednesday": false,
      "thursday": false,
      "friday": false,

    })
    props.heatMapTuesday()

  }

  function handleWednesday() {
    props.setActiveDay({
      "monday": false,
      "tuesday": false,
      "wednesday": true,
      "thursday": false,
      "friday": false,

    })
    props.heatMapWednesday()

  }

  function handleThursday() {
    props.setActiveDay({
      "monday": false,
      "tuesday": false,
      "wednesday": false,
      "thursday": true,
      "friday": false,

    })
    props.heatMapThursday()

  }

  function handleFriday() {
    props.setActiveDay({
      "monday": false,
      "tuesday": false,
      "wednesday": false,
      "thursday": false,
      "friday": true,

    })
    props.heatMapFriday()

  }



  return (


    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div direction="row" spacing={2} >
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="success"
            onClick={props.heatMapLow}
          >
            Low Traffic
          </Button>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="secondary"
              onClick={props.heatMapMedium}
            >
              Medium Traffic
            </Button>
          </ThemeProvider>
          <Button variant="contained" color="error" onClick={props.heatMapHigh}>
            High Traffic
          </Button>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant={props.activeDay.monday ? "contained" : "outlined"} onClick={handleMonday}>
            Monday
          </Button>
          <Button variant={props.activeDay.tuesday ? "contained" : "outlined"} onClick={handleTuesday}>
            Tuesday
          </Button>
          <Button variant={props.activeDay.wednesday ? "contained" : "outlined"} onClick={handleWednesday}>
            Wednesday
          </Button>
          <Button variant={props.activeDay.thursday ? "contained" : "outlined"} onClick={handleThursday}>
            Thursday
          </Button>
          <Button variant={props.activeDay.friday ? "contained" : "outlined"} onClick={handleFriday}>
            Friday
          </Button>
        </div>
      </div>

    </div>

  );
};

export default Filter;
