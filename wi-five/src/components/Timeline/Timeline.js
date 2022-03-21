import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Timeline = [
  {
    value: 0,
    label: '0:00 AM',
  },
  {
    value: 4,
    label: '4:00 AM',
  },
  {
    value: 8,
    label: '8:00 AM',
  },
  {
    value: 12,
    label: '12:00 PM',
  },
  {
    value: 16,
    label: '4:00 PM',
  },
  {
    value: 20,
    label: '8:00 PM',
  },
  {
    value: 24,
    label: '12:00 AM',
  }
];

function valuetext(value) {
  return `${value}:00`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box  xs={{ width: 50}}>
      <Slider
        aria-label="Custom marks"
        defaultValue={8}
        getAriaValueText={valuetext}
        step={4}
        max={24}
        min={0}
        size="medium"
        color="secondary"
        valueLabelDisplay="auto"
        marks={Timeline}
      />
    </Box>
  );
}