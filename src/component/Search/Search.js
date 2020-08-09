/* eslint-disable no-use-before-define */
import React from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { selectTeam } from "../../redux/actions";

const getUsersFromTeam = (teams) => {
    const allUsers = teams.reduce((a, b) => {
        const aUsers = Array.isArray(a) ? a : a.users.map(user => ({...user, teamName: a.teamName}));
        const bUsers = b.users.map(user => ({ ...user, teamName: b.teamName }));
        return aUsers.concat(bUsers);
    });
    return allUsers;
}

const userSearch = props => {
    const teamWithUsers = props.teams.filter(team => team.users && team.users.length > 0);
    const userList = getUsersFromTeam(teamWithUsers);
    return (
        <Autocomplete
            id="combo-box-demo"
            options={userList}
            getOptionLabel={(user) => `${user.userName} from ${user.teamName}`}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search User" variant="outlined" />}
            onChange={(e, val) => props.selectTeam(val.teamName)}
        />
    );
}

const mapStateToProps = state => ({
    ...state.global
})

const mapDispatchToProps = dispatch => ({
    selectTeam: data => dispatch(selectTeam(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(userSearch);


