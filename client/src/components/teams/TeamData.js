import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTeam, deleteTeam } from '../../redux/teams'


class TeamData extends Component {
  constructor(props){
    super(props)
    this.state = {
      Name: '',
      island: '',
      record: ''
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
    let newTeam = {
      name: this.state.name,
      island: this.state.island,
      record: this.state.record
    }
    this.props.editTeam( this.props.id, newTeam)
    this.setState({
      name: '',
      island: '',
      record: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <h3>Name: {this.props.name}</h3>
          <p>Island: {this.props.island}</p>
          <p>Win/Loss: {this.props.record}</p>
        </div>
        <div className='team-form'>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              value={this.state.name}
              name='name'
              onChange={this.handleChange}
              placeholder="New Team Name"
            />
            <input 
              type="text"
              value={this.state.island}
              name='island'
              onChange={this.handleChange}
              placeholder='Enter island name'
              />
            <input 
              type="text"
              value={this.state.record}
              name='record'
              onChange={this.handleChange}
              placeholder="Win/Loss"
              />
              <button>Submit</button>
          </form>
          {/* <button onClick={() => this.props.deleteTeam(this.props.id)}>Delete Team Data</button> */}
        </div>
      </div>
    )
  }
}

export default connect(state => state, { editTeam, deleteTeam })(TeamData)