import React from 'react';
import Team from '../../../../component/Team/Team';
import classes from './Teams.module.css';

const teams = ({ data }) => {
    return (
        <div className={classes.Teams}>
            <label>Teams</label>
            <br/>
            <div>
                {data.map(team => 
                    <Team key={team.teamName} {...team} />
                )}
            </div>
        </div>
    )
}

export default teams;