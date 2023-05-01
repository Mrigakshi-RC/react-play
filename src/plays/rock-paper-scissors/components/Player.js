import React from 'react';
import classes from './Player.module.css';
import rock from '../images/rock.jpg';
import paper from '../images/paper.jpg';
import scissors from '../images/scissors.jpg';

function Player() {
  return (
    <div className={classes.player}>
      <h2>Your Score</h2>
      <div className={classes.playerContainer}>
        <img alt="Rock" src={rock} />
        <img alt="Paper" src={paper} />
        <img alt="Scissors" src={scissors} />
      </div>
    </div>
  );
}

export default Player;
