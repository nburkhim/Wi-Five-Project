import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Timeline = [
  {
    value: 8,
    label: '8:00 AM',
  },
  {
    value: 10,
    label: '10:00 AM',
  },
  {
    value: 12,
    label: '12:00 PM',
  },
  {
    value: 14,
    label: '2:00 PM',
  },
  {
    value: 16,
    label: '4:00 PM',
  },
  {
    value: 18,
    label: '6:00 PM',
  },
  {
    value: 20,
    label: '8:00 PM',
  },
  {
    value: 22,
    label: '10:00 PM',
  }
];

function valuetext(value) {
  return `${value}:00`;
}



export default function DiscreteSliderMarks(props) {


  function onChange(e) {
    let { value } = e.target;
    props.setHeatMapTime(value)
  }

  function onChangeCommited() {
    props.sliderChange();
  }

  return (
    <Box xs={{ width: 50 }}>
      <Slider

        aria-label="Custom marks"

        getAriaValueText={valuetext}
        step={2}
        max={22}
        min={8}
        size="medium"
        color="secondary"
        valueLabelDisplay="auto"
        marks={Timeline}
        onChange={onChange}
        onChangeCommitted={onChangeCommited}
        value={props.heatMapTime}

      />
    </Box>
  );
}