import React from 'react'
import './styles/player.css'

function Player(props) {
    return (
        <div className='player-main'>
            <h2>{props.playerName}</h2>
            <h4>Scored {props.totalScore}</h4>
            <h6>{props.partialScore}</h6>
        </div>
    )
}

export default Player
