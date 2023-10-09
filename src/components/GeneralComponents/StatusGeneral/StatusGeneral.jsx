import React from 'react'
import './StatusGeneral.css'

export const StatusOK = ({ text}) => (
    <button className="statusOK">
        {text}
    </button>
);

export const StatusWarning = ({ text}) => (
    <button className="statusWarning">
        {text}
    </button>
);

export const StatusFail = ({ text}) => (
    <button className="statusFail">
        {text}
    </button>
);

export const StatusWorking = ({ text}) => (
    <button className="statusWorking">
        {text}
    </button>
);
