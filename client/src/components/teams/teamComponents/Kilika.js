import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTeam } from '../../../redux/teams'

import TeamData from '../TeamData'

class Kilika extends Component {
    constructor(props){
        super(props)
        this.state = {
        
        }
        //bind here
    }

    componentDidMount(){
      this.props.getTeam()
    }

  render() {
    const mappedTeam = this.props.teams.map(item => {
      return(
        <div>
          <TeamData 
            name={item.name}
            island={item.island}
            record={item.record}
            id={item._id}
            key={item.id}
          />
        </div>
      )
    }).splice(1, 2)
    return (
      <div className='kilika'>
          {mappedTeam}
      </div>
    )
  }
}

export default connect(state => state, { getTeam }) (Kilika)