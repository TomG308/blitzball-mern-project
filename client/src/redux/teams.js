import axios from 'axios'

export const getTeam = () => {
    return dispatch => {
        axios.get('/teams').then(response => {
            dispatch({
                type: 'GET_TEAM',
                teams: response.data
            })
        }).catch(err => {
            console.error(err)
        })
    }
}

export const newTeam = newTeam => {
    return dispatch => {
        axios.post('/teams', newTeam).then(response => {
            dispatch(getTeam())
            // dispatch({
                // type: 'NEW_TEAM',
                // teams: response.data
           // })
        }).catch(err => {
            console.error(err)
        })
    }
}

export const deleteTeam = id => {
    return dispatch => {
        axios.delete(`/teams/${id}`).then(response => {
            dispatch(getTeam())
            // dispatch({
            //     // type: 'DELETE_TEAM',
            //     // teams: response.data
            // })
        }).catch(err => {
            console.error(err)
        })
    }
}

export const editTeam = (id, newTeam) => {
    return dispatch => {
        axios.put(`/teams/${id}`, newTeam).then(response => {
            dispatch(getTeam())
            // dispatch({
            //     // type: 'EDIT_TEAM',
            //     // teams: response.data
            //     getTeam()
            // })
        }).catch(err => {
            console.error(err)
        })
    }
}

const teamReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TEAM':
            return action.teams
        // case 'NEW_TEAM':
        //     return action.teams
        // case 'DELETE_TEAM':
        //     return action.teams
        // case 'EDIT_TEAM':
        //     return action.teams
        default: 
            return state
    }
}

export default teamReducer