import React, { Component } from 'react'

import Besaid from './teamComponents/Besaid'
import Kilika from './teamComponents/Kilika';

export default class Besaid_Kilika extends Component {

  render() {
   
    return (
      <div className="teams">
       <Besaid />
       <Kilika />
      </div>
    )
  }
}
