import React from 'react'
import './Dashboard.css'

const Dashboard = (props) => {
    return (
        <>
            <div className="dashboard-container">
                {props.children}
            </div>
        </>
    )
}

export default Dashboard