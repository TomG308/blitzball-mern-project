import axios from 'axios'

export const getPlayer = () => {
    return dispatch => {
        axios.get('/players').then(response => {
            dispatch({
                type: 'GET_PLAYER',
                players: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const newPlayer = newPlayerData => {
    console.log(newPlayerData)
    return dispatch => {
        axios.post('/players', newPlayerData).then(response => {
            dispatch(getPlayer())
            // dispatch({
            //     type: 'NEW_PLAYER',
            //     players: response.data
            // })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deletePlayer = id => {
    return dispatch => {
        axios.delete(`/players/${id}`).then(response => {
            dispatch(getPlayer())
            // dispatch({
            //     type: 'DELETE_PLAYER',
            //     players: response.data
            // })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editPlayer = (id, newPlayer) => {
    return dispatch => {
        axios.put(`/players/${id}`, newPlayer).then(response => {
            dispatch(getPlayer)
            // dispatch({
            //     type: 'EDIT_PLAYER',
            //     players: response.data
            // })
        }).catch(err => {
            console.log(err)
        })
    }
}

const playerReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PLAYER':
            return action.players
        // case 'NEW_PLAYER':
        //     return action.players
        // case 'DELETE_PLAYER':
        //     return action.player
        // case 'EDIT_PLAYER':
        //     return action.player
        default: 
            return state
    }
}

export default playerReducer