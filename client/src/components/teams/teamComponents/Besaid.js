import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTeam } from '../../../redux/teams'

import TeamData from '../TeamData'

class Besaid extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
        
    //     }
    //     //bind here
    // }

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
            key={item._id}
          />
        </div>
      )
    }).splice(0, 1)
    return (
      <div className='besaid'>
          {mappedTeam}
      </div>
    )
  }
}

export default connect(state => state, { getTeam }) (Besaid)