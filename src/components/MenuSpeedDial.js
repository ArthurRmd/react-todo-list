import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import * as PropTypes from "prop-types";
import React from "react";


const MenuSpeedDial = () => {

    const actions = [
        {icon: <i className="fas fa-edit"/>, name: 'Edit'},
        {icon: <i className="fas fa-check"/>, name: 'Check'},
        {icon: <i className="fas fa-trash"/>, name: 'Delete'},
    ];


    return <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{position: "absolute", bottom: 16, right: 16}}
        icon={<SpeedDialIcon/>}
    >
        {actions.map(action =>
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
            />)}
    </SpeedDial>;
}

export default MenuSpeedDial