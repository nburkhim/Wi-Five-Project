import React from 'react'

const Filter = (props) => {


    return (
        <div>
            <button onClick={props.heatMapLow}>Low Traffic</button>
            <button onClick={props.heatMapMedium}>Medium Traffic</button>
            <button onClick={props.heatMapHigh}>High Traffic</button>

        </div>
    )
}

export default Filter