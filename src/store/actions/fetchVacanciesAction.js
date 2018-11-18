import axios from 'axios';
export const FETCH_VACANCIES = 'FETCH_VACANCIES';
export const FETCH_VACANCIES_SUCCESS = 'FETCH_VACANCIES_SUCCESS';
export const FETCH_VACANCIES_FAIL = 'FETCH_VACANCIES_FAIL';


export const fetchVacanciesAction = () => (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/comments?_start=0&_end=6`)
    .then(
      res => {
        const vacancies = res.data;
        dispatch({ type: 'FETCH_VACANCIES_SUCCESS', vacancies });
      },
      error => {
        dispatch({ type: 'FETCH_VACANCIES_FAIL', error });
        throw error
      }
    )
};