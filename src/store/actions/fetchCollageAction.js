import axios from 'axios';
export const FETCH_COLLAGE = 'FETCH_COLLAGE';
export const FETCH_COLLAGE_SUCCESS = 'FETCH_COLLAGE_SUCCESS';
export const FETCH_COLLAGE_FAIL = 'FETCH_COLLAGE_FAIL';


export const fetchCollageAction = () => (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=18`)
    .then(
      res => {
        const collage = res.data;
        dispatch({ type: 'FETCH_COLLAGE_SUCCESS', collage });
      },
      error => {
        dispatch({ type: 'FETCH_COLLAGE_FAIL', error });
        throw error
      }
    )
};