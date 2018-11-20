import {
  FETCH_VACANCIES,
  FETCH_VACANCIES_SUCCESS,
  FETCH_VACANCIES_FAIL
} from '../actions/fetchVacanciesAction';
import initialState from './../initialState';

const vacanciesReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_VACANCIES:
      return {
        ...state
      };
    case FETCH_VACANCIES_SUCCESS:
      return {
        ...state,
        vacancies: [...state.vacancies, ...action.vacancies]
      };
    case FETCH_VACANCIES_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default vacanciesReducer;