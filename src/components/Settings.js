import React from 'react'
import './styles/settings.css'

function Settings(props) {
    return (
        <div className='main-settings'>
            <button className='new-game btn' onClick={props.new}>New Game</button>
            <div className="img-container">
                <div className={props.showFirst}></div>
                <div className={props.showSec}></div>
            </div>
            <button onClick={props.makeRoll}>Roll Dice</button>
            <button onClick={props.changePlayer}>Hold</button>
            <form onSubmit={props.submitSettings}>
            <input type="number" value={props.value} onChange={props.pointSet}/>
            </form>
        </div>
    )
}

export default Settings
