import axios from 'axios';
// Actions ничего не менют. Меняют у нас reducers
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL";

// fetchPostsAction происходит сразу после вызова его в Home компоненте
// { type: FETCH_POSTS } это самое простое действие, что мы можем сделать,
// то есть мы просто передаем строку
export const fetchPostsAction = () => (dispatch) => {
  dispatch({ type: FETCH_POSTS });

  axios.get(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
    .then(
      res => {
        const posts = res.data;
        dispatch({ type: 'FETCH_POSTS_SUCCESS', posts });
      },
      error => {
        dispatch({ type: 'FETCH_POSTS_FAIL', error });
        throw error
      }
    )
};