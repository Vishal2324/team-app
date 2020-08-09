import React from 'react';
import Createuser from '../../../../component/CreateUser/CreateUser';
import classes from './TeamDetail.module.css';

const teamDetail = ({data}) => {
    const selectedteam = data.find(team => team.selected === true);

    if (!selectedteam){
        return (
            <div className={classes.TeamDetail}>
                No Team Selected
            </div>
        )
    }

    return (
        <div className={classes.TeamDetail}>
            <div className={classes.teamName}>
                <h2>{selectedteam.teamName}</h2>
            </div>


            <div className={classes.userListContainer}>
                <Createuser teamName={selectedteam.teamName} newUser />
                {selectedteam.users && selectedteam.users.map(user => 
                    <Createuser key={user.userName} teamName={selectedteam.teamName} {...user} />
                )}
            </div>
        </div>
    )
}

export default teamDetail;