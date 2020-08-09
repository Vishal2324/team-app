import { ADD_TEAM, ADD_USER, SELECT_TEAM, DELETE_USER } from "./constants";

export const addTeam = payload => ({
    type: ADD_TEAM,
    payload
})

export const addUser = payload => ({
    type: ADD_USER,
    payload
})

export const selectTeam = payload => ({
    type: SELECT_TEAM,
    payload
})

export const deleteUser = payload => ({
    type: DELETE_USER,
    payload
})