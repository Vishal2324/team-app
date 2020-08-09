import { combineReducers } from "redux";
import { ADD_TEAM, ADD_USER, SELECT_TEAM, DELETE_USER } from "./constants";

const initialState = { 
    teams: [{ "selectType": "team", "teamName": "vishal", "selected": false, "users": [{ "userName": "lipika", "userDesc": "tester" }, { "userName": "lipika1", "userDesc": "tseter" }, { "userName": "vishal_787678", "userDesc": "tsetr" }] }, { "selectType": "team", "teamName": "vishal3", "selected": true, "users": [{ "userName": "lipika", "userDesc": "tester" }, { "userName": "vishal_787678", "userDesc": "developer" }, { "userName": "lipika22", "userDesc": "ui developer" }] }]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TEAM: 
            const newTeams = [...state.teams, action.payload];
            const newState = {
                ...state,
                teams: newTeams
            }
            return newState;

        case ADD_USER:
            const teamIdx = state.teams.findIndex(team => team.teamName === action.payload.teamName);
            const newTeamData = { ...state.teams[teamIdx] };
            newTeamData.users = newTeamData.users || [];
            newTeamData.users.push(action.payload.userData);
            const newTeamsData = [ ...state.teams ];
            newTeamsData[teamIdx] = newTeamData
            const newTeamsState = {
                ...state,
                teams: newTeamsData
            }
            return newTeamsState;

        case SELECT_TEAM: 
            let allNewTeams = [ ...state.teams ];
            allNewTeams = allNewTeams.map(team => ({...team, selected: false}));
            const selectedTeamIdx = allNewTeams.findIndex(team => team.teamName === action.payload);
            allNewTeams[selectedTeamIdx].selected = true;
            return {
                ...state,
                teams: allNewTeams
            }

        case DELETE_USER: 
            const newTeamsArr = [...state.teams];
            const userTeamIdx = newTeamsArr.findIndex(team => team.teamName === action.payload.teamName);
            const userTeamData = { ...newTeamsArr[userTeamIdx] };
            const userIdx = userTeamData.users.findIndex(user => user.userName === action.payload.userName);
            newTeamsArr[userTeamIdx].users.splice(userIdx, 1);
            return {
                ...state,
                teams: newTeamsArr
            };

        default:
            return state
    }
}

const globalReducer = combineReducers({
    global: rootReducer
});

export default globalReducer;