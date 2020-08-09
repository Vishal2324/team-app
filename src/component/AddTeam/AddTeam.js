import React, { useState } from 'react';
import classes from './AddTeam.module.css';

const AddTeam = ({ handleClick, data }) => {
    const [selectType, handleSelectTypeChange] = useState("choose-any");
    const [teamName, handleTeamNameChange] = useState("");

    const handleChange = event => {
        if (event.target.name === "selectType"){
            handleSelectTypeChange(event.target.value);
        } else {
            handleTeamNameChange(event.target.value)
        }
    }

    const createTeamClickHandler = event => {
        event.preventDefault();
        const teamExist = data.findIndex(team => team.teamName === teamName);
        if (teamExist !== -1){
            alert("Team with same name already exist");
            return false;
        }
        handleClick({
            selectType,
            teamName
        });
        handleSelectTypeChange("choose-any");
        handleTeamNameChange("")
    }

    const createTeamDisable = () => {
        if (selectType === "choose-any" || teamName === ""){
            return true;
        }

        return false;
    }

    return (
        <form className={classes.form}>
            <div className={classes.formControl}>
                <label htmlFor="select-type">Select Type</label>
                <select 
                    id="select-type" 
                    value={selectType} 
                    onChange={handleChange} 
                    name="selectType"
                >
                    <option value="choose-any" disabled>Choose Any</option>
                    <option value="team">Team</option>
                </select>
            </div>
            <div className={classes.formControl}>
                <label htmlFor="team-name">Team name</label>
                <input 
                    id="team-name" 
                    type="text" 
                    placeholder="Enter Here" 
                    name="teamName" 
                    onChange={handleChange} 
                    value={teamName} 
                />
            </div>
            <div className={classes.formControl}>
                <button onClick={createTeamClickHandler} disabled={createTeamDisable()}>Create</button>
            </div>
        </form>
    )
}

export default AddTeam;