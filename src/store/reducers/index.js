import {combineReducers} from 'redux';
import postsReducer from './posts';
import collageReducer from './collage';

export default combineReducers({
  posts: postsReducer,
  collage: collageReducer
})