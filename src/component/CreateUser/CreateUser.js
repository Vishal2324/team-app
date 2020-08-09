import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from "../../redux/actions";
import classes from './CreateUser.module.css';

const CreateUser = ({ userName: name, userDesc: desc, addUser, teamName, newUser, teams, deleteUser }) => {
    const [userName, handleUserNameChange] = useState("");
    const [userDesc, handleUserDescChange] = useState("");  

    const handleChange = event => {
        if (event.target.name === "username") {
            handleUserNameChange(event.target.value);
        } else {
            handleUserDescChange(event.target.value)
        }
    }

    const createUserClickHandler = event => {
        event.preventDefault();
        const teamData = teams.find(team => team.teamName === teamName);
        const userExist = (teamData.users && teamData.users.findIndex(user => user.userName === userName) !== -1);
        if (userExist){
            alert("user already added in the team")
            return false;
        }
        addUser({
            userData: {
                userName,
                userDesc
            },
            teamName
        })

        handleUserNameChange("");
        handleUserDescChange("");
    }

    const deleteUserClickHandler = event => {
        event.preventDefault();
        deleteUser({ teamName, userName: name })
    }

    const createUserDisable = () => {
        if (userName === "" || userDesc === ""){
            return true
        }
        return false
    }

    return (
        <div className={classes.createUser}>
            <form>
                <div className={classes.formControl}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={handleChange}
                        value={newUser ? userName : name}
                        readOnly={!newUser}
                    />
                </div>
                <div className={classes.formControl}>
                    <label>Description</label>
                    <textarea 
                        rows={5} 
                        name="userdescription" 
                        onChange={handleChange}
                        value={newUser ? userDesc : desc}
                        readOnly={!newUser}
                    />
                </div>
                <div className={classes.formControl}>
                    <button 
                        onClick={newUser ? createUserClickHandler : deleteUserClickHandler} 
                        disabled={newUser ? createUserDisable() : false}
                        style={{ backgroundColor: newUser ? "#f7a601" : "#fb0101"}}
                    >{newUser ? "Create User" : "Delete User"}</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.global
})

const mapDispatchToProps = dispatch => ({
    addUser: data => dispatch(addUser(data)),
    deleteUser: data => dispatch(deleteUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);