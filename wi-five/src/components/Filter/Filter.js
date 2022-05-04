import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { spacing } from "@mui/system";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFD93D",
    },
  },
});
const MuiButton = styled(Button)(spacing)
const Filter = (props) => {
  return (
    <div className="container">
      <div direction="row" spacing={2}>
        <MuiButton variant="contained" color="success" onClick={props.heatMapLow}>
          Low Traffic
        </MuiButton>
        <ThemeProvider theme={theme}>
          <MuiButton
            variant="contained"
            color="secondary"
            onClick={props.heatMapMedium}
          >
            Medium Traffic
          </MuiButton>
        </ThemeProvider>
        <MuiButton variant="outlined" color="error" onClick={props.heatMapHigh}>
          High Traffic
        </MuiButton>
        <br />

        <br />

        <div>
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
