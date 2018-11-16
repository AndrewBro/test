import axios from 'axios';
export const FETCH_MOREPOSTS_SUCCESS = "FETCH_MOREPOSTS_SUCCESS";
export const FETCH_MOREPOSTS_FAIL = "FETCH_MOREPOSTS_FAIL";

export const fetchMorePostsAction = () => (dispatch) => {
  // dispatch({ type: FETCH_POSTS });

  axios.get(`https://jsonplaceholder.typicode.com/posts?_start=20&_end=23`)
    .then(
      res => {
        const morePosts = res.data;
        dispatch({ type: 'FETCH_MOREPOSTS_SUCCESS', morePosts });
      },
      error => {
        dispatch({ type: 'FETCH_MOREPOSTS_FAIL', error });
        throw error
      }
    )
};