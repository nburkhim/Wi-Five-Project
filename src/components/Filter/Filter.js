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
          <Button variant="outlined" onClick={props.heatMapMonday}>
            Monday
          </Button>
          <Button variant="outlined" onClick={props.heatMapTuesday}>
            Tuesday
          </Button>
          <Button variant="outlined" onClick={props.heatMapWednesday}>
            Wednesday
          </Button>
          <Button variant="outlined" onClick={props.heatMapThursday}>
            Thursday
          </Button>
          <Button variant="outlined" onClick={props.heatMapFriday}>
            Friday
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
