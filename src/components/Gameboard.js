import React, { Component } from 'react'
import Player from './Player'
import Settings from './Settings'
import './styles/gameboard.css'

export class Gameboard extends Component {
    state = {
        pointsToWin: 100,
        diceOne: 0,
        diceTwo: 0,
        displayFirst: '',
        displaySec: '',
        activePlayer: 1,
        winner: false,
        showOne: true,
        showTwo:false,
        players1:
            {
                currentScore: 0,
                globalScore: 0,
            },
        players2:
            {
                currentScore: 0,
                globalScore: 0,
            }
    }

    hold = () => {
        this.state.activePlayer === 1 ?
        this.setState({activePlayer : 2, showTwo:true, showOne:false}) :
        this.setState({activePlayer: 1, showOne: true, showTwo: false})
        
    }

    rollDice = () =>{
        if(this.state.winner === false){
            const randomOne = Math.floor(6*Math.random())+1; 
            const randomTwo = Math.floor(6*Math.random())+1; 
            if ( randomOne === 6 && randomTwo === 6) return this.hold()
            this.setState({diceOne:randomOne, diceTwo: randomTwo})
            this.calculateScore()
            this.showDice1()
            this.showDice2()
            this.isWinner()
        }
    }
    calculateScore = ()=>{
        if (this.state.activePlayer === 1){
            this.setState({
                players1: {currentScore: this.state.diceOne + this.state.diceTwo,
                            globalScore: this.state.players1.globalScore + this.state.players1.currentScore }
            })
            
        }
        if (this.state.activePlayer === 2){
            this.setState({
                players2: {currentScore: this.state.diceOne + this.state.diceTwo,
                    globalScore: this.state.players2.globalScore + this.state.players2.currentScore }
            })
        }
    }

    showDice1 = () =>{
        switch(this.state.diceOne){
            case 1:
                this.setState({ displayFirst: 'dice1'})
            break;
            case 2:
                this.setState({ displayFirst: 'dice2'})
            break;
            case 3:
                this.setState({ displayFirst: 'dice3'})
            break;
            case 4:
                this.setState({ displayFirst: 'dice4'})
            break
            case 5:
                this.setState({ displayFirst: 'dice5'})
            break
            case 6:
                this.setState({ displayFirst: 'dice6'})
            break
            default: this.setState({displayFirst: 'container'})
            }
    }
    showDice2 = () =>{
        switch(this.state.diceTwo){
            case 1:
                this.setState({ displaySec: 'dice1'})
            break;
            case 2:
                this.setState({ displaySec: 'dice2'})
            break;
            case 3:
                this.setState({ displaySec: 'dice3'})
            break;
            case 4:
                this.setState({ displaySec: 'dice4'})
            break
            case 5:
                this.setState({ displaySec: 'dice5'})
            break
            case 6:
                this.setState({ displaySec: 'dice6'})
            break
            default: this.setState({displaySec: 'container'})
            }
    }
    pointSettings = (e)=> {
        if(e.target.value > 0){
        this.setState({pointsToWin: e.target.value})
        }
    }
    submitPoints = (e)=>{
        e.preventDefault();
    }

    isWinner = ()=>{
        if ((this.state.players1.globalScore > this.state.pointsToWin) ||
        (this.state.players2.globalScore > this.state.pointsToWin))
        this.setState({winner: true})
    }

    reset = () => {
        this.setState({
            pointsToWin: 100,
            diceOne: 0,
            diceTwo: 0,
            displayFirst: '',
            displaySec: '',
            activePlayer: 1,
            winner: false,
            showOne: true,
            showTwo:false,
            players1:
                {
                    currentScore: 0,
                    globalScore: 0,
                },
            players2:
                {
                    currentScore: 0,
                    globalScore: 0,
                }
        })
    }


    render() {
        return (
            <div>
                <Player playerName='Player 1'
                show={this.state.showOne}
                totalScore={this.state.players1.globalScore}
                partialScore={this.state.players1.currentScore}/>

                <Settings
                    changePlayer={this.hold}
                    makeRoll={this.rollDice}
                    new={this.reset}
                    showFirst={this.state.displayFirst}
                    showSec= {this.state.displaySec}
                    pointSet = {this.pointSettings}
                    value = {this.state.pointsToWin}
                    submitSettings = {this.submitPoints}
                    ></Settings>

                <Player playerName='Player 2' 
                show={this.state.showTwo}
                totalScore={this.state.players2.globalScore}
                partialScore={this.state.players2.currentScore}/>
            </div>
        )
    }
}

export default Gameboard
