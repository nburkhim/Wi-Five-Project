import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFD93D"

    }
  }
})
const Filter = (props) => {
  return (
    <div className="filter" direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={props.heatMapLow}>
        Low Traffic
      </Button>
      <ThemeProvider theme={theme}><Button variant="contained" color="secondary" onClick={props.heatMapMedium}>
        Medium Traffic
      </Button></ThemeProvider>
      <Button variant="contained" color="error" onClick={props.heatMapHigh}>
        High Traffic
      </Button><br />


      <Button variant="contained" onClick={props.heatMapMonday}>
        Monday
      </Button>
      <Button variant="contained" onClick={props.heatMapTuesday}>
        Tuesday
      </Button>
      <Button variant="contained" onClick={props.heatMapWednesday}>
        Wednesday
      </Button>
      <Button variant="contained" onClick={props.heatMapThursday}>
        Thursday
      </Button>
      <Button variant="contained" onClick={props.heatMapFriday}>
        Friday
      </Button>
    </div>
  );
};

export default Filter;
