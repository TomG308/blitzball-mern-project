import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePlayer, editPlayer } from '../../redux/players'


class PlayerData extends Component {
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

handleChange(e){
  const { value, name } = e.target
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
  this.props.editPlayer( this.props.id, newPlayer)
  this.setState({
    name: '',
    team: '',
    position: '',
    contract: '',
    pricePerGame: ''
  })
}

  render() {
    return (
      <div className='player-container'>
        <div className="player-data">
          <p>Name: {this.props.name}.</p>
          <p>Team: {this.props.team}.</p>
          <p>Position: {this.props.position}.</p>
          <p>Contract: {this.props.contract} games</p>
          <p>Price of contract: {this.props.pricePerGame}g</p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text"
                value={this.state.name}
                name='name'
                onChange={this.handleChange}
                placeholder='Player name'
                />
              <input 
                type="text"
                value={this.state.team}
                name='team'
                onChange={this.handleChange}
                placeholder='Player team'
              />
              <input 
                type="text"
                value={this.state.contract}
                name='contract'
                onChange={this.handleChange}
                placeholder='contract status'
              />
              <input 
                type="text"
                value={this.state.pricePerGame}
                name='pricePerGame'
                onChange={this.handleChange}
                placeholder='Price of contract'
              />
              <button>Submit</button>
            </form>
            <div>
              <button onClick={() => this.props.deletePlayer(this.props.id)}>Delete player Data</button>
            </div>
          </div>  
        </div>
      </div>
    )
  }
}

export default connect(state=> state, { deletePlayer, editPlayer }) (PlayerData)