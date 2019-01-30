// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export const FETCH_NEXT = 'FETCH_NEXT';
export const FETCH_PREV = 'FETCH_PREV';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA_START});
    axios.get(`https://swapi.co/api/people/?page=1`)
        // .then(res => console.log(res))
        .then(res => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }))
}

export const fetchNext = url => dispatch => {
   axios.get(url)
    .then(res => dispatch({type: FETCH_NEXT, payload: res.data}))
}

export const fetchPrev = url => dispatch => {
    axios.get(url)
     .then(res => dispatch({type: FETCH_PREV, payload: res.data}))
 }
