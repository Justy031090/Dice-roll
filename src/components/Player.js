import React from 'react'
import ActivityIcon from './ActivityIcon'
import './styles/player.css'

function Player(props) {

    return (
        
        <div className='player-main'>
            <h2>{props.show && <ActivityIcon/>} {props.playerName}</h2>
            <h4>Scored {props.totalScore}</h4>
            <h6>{props.partialScore}</h6>
        </div>
    )
}

export default Player
