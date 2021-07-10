import axios from 'axios';
import {
    CREATE_AUTHORS_REQUEST,
    CREATE_AUTHORS_SUCCESS,
    CREATE_AUTHORS_FAIL
} from '../contants';


export const createNewAuthor = (authorName, country, dateOfBirth, dateOfDeath) => async (dispatch) => {
    dispatch({ type: CREATE_AUTHORS_REQUEST})
        try{
            const {data} = await axios.post('/authors', {
                name: authorName,
                country,
                dateOfBirth,
                dateOfDeath
              })
              console.log(data)
              dispatch({ type: CREATE_AUTHORS_SUCCESS, payload: data })
        } catch (error){
            dispatch({
                type: CREATE_AUTHORS_FAIL,
                payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
            })
        }
}