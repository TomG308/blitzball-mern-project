import React from 'react';

import Index from './components/Index'
import Foot from './components/Foot/Foot'
import Teams from './components/teams/Teams';
import Players from './components/players/Players';
import style from './style.css'

const App = () => {
    return(
        <h1>
            <Index />
            <Teams />
            <Players />
            <Foot />
        </h1>
    )
}

export default App;