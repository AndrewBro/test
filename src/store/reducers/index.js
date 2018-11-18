import {combineReducers} from 'redux';
import postsReducer from './posts';
import collageReducer from './collage';
import vacanciesReducer from './vacancies';


export default combineReducers({
  posts: postsReducer,
  collage: collageReducer,
  vacancies: vacanciesReducer,
})