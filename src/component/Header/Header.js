import React from 'react';
import { connect } from "react-redux";
import AddTeam from '../AddTeam/AddTeam';
import UserSearch from '../Search/Search';
import { addTeam } from "../../redux/actions";

import classes from './Header.module.css';

const header = props => {
    return (
        <header className={classes.header}>
            <div className={classes.teamForm}>
                <AddTeam handleClick={props.addTeam} data={props.teams} /> 
            </div>
            <div className={classes.searchForm}>
                <UserSearch />
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    teams: state.global.teams
})

const mapDispatchToProps = dispatch => ({
    addTeam: data => dispatch(addTeam(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(header);