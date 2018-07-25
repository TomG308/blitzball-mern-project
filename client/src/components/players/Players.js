import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayer, newPlayer } from '../../redux/players'

import PlayerData from './PlayerData'

class Players extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            team: '',
            position: '',
            contract: '',
            pricePerGame: ''
        }
        //bind here
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.getPlayer()
    }

    handleChange(e){
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        let newPlayer = {
            name: this.state.name,
            team: this.state.team,
            position: this.state.position,
            contract: this.state.contract,
            pricePerGame: this.state.pricePerGame
        }
        this.props.newPlayer(newPlayer)
        this.setState({
            name: '',
            team: '',
            position: '',
            contract: '',
            pricePerGame: ''
        })
    }

  render() {
    const mappedPlayers = this.props.players.map(item => {
        return(
            <div>
                <PlayerData 
                    name={item.name}
                    team={item.team}
                    position={item.position}
                    contract={item.contract}
                    pricePerGame={item.pricePerGame}
                    id={item._id}
                    key={item._id}
                />
            </div>
        )
    })

    return (
    <div>
        <div className='player-div'>
            {mappedPlayers}
        </div>
        <h3>Add a new team!</h3>
        <div  className='delete-butt-container'>
            <form onSubmit={this.handleSubmit} className='delete-butt'>
                <input 
                    type='text'
                    value={this.state.name} 
                    name='name'
                    onChange={this.handleChange }
                    placeholder='Player name'
                />
                <input 
                    type='text'
                    value={this.state.team}
                    name='team'
                    onChange={this.handleChange}
                    placeholder='Player team'
                />
                <input 
                    type='text'
                    value={this.state.position}
                    name='position'
                    onChange={this.handleChange}
                    placeholder='Player Position'
                />
                <input 
                    type="text"
                    value={this.state.contract}
                    name='contract'
                    onChange={this.handleChange}
                    placeholder='Contract information'
                />
                <input 
                    type="text"
                    value={this.state.pricePerGame}
                    name='pricePerGame'
                    onChange={this.handleChange}
                    placeholder='Price for contract'
                />
                <button>Submit</button>
            </form>
        </div>
    </div>
    )
  }
}

export default connect(state=> state, { getPlayer, newPlayer }) (Players)