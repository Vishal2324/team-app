import React, { Component } from "react";
import { connect } from "react-redux";
import Teams from './subComponent/Teams/Teams';
import TeamDetail from './subComponent/TeamDetail/TeamDetail';
import classes from './Home.module.css';

class Home extends Component {
    render(){
        const { teams } = this.props;
        return (
            <div className={classes.Home}>
                <Teams data={teams} />
                <TeamDetail data={teams} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.global
})

export default connect(mapStateToProps)(Home);

