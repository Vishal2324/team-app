import React from 'react';
import { connect } from "react-redux";
import { selectTeam } from "../../redux/actions";
import classes from './Team.module.css';

const team = ({ teamName, selectTeam, selected }) => {
    return (
        <div 
            className={[classes.Team, selected ? classes.selected : ""].join(" ")} 
            onClick={() => selectTeam(teamName)}
        >
            {teamName}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    selectTeam: teamName => dispatch(selectTeam(teamName))
})

export default connect(null, mapDispatchToProps)(team);