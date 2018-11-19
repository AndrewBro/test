import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

export const fetchPostsAction = () => (dispatch) => {
  dispatch({ type: FETCH_POSTS });

  axios.get(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=6`)
    .then(
      res => {
        const posts = res.data;
        dispatch({ type: FETCH_POSTS_SUCCESS, posts });
      },
      error => {
        dispatch({ type: FETCH_POSTS_FAIL, error });
        throw error
      }
    )
};