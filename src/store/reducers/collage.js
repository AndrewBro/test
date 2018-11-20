import {
  FETCH_COLLAGE,
  FETCH_COLLAGE_SUCCESS,
  FETCH_COLLAGE_FAIL
} from '../actions/fetchCollageAction';

import initialState from './../initialState';

const collageReducer = function (state = initialState.collage, action) {
  switch (action.type) {
    case FETCH_COLLAGE:
      return {
        ...state,
        isLoadedPosts: false
      };
    case FETCH_COLLAGE_SUCCESS:
      let sortedCollage = [];
      for (let i=0; i<action.collage.length; i+=3) {
        sortedCollage.push(action.collage.slice(i,i+3))
      }
      return {
        ...state,
        isLoadedPosts: true,
        collage: sortedCollage
      };
    case FETCH_COLLAGE_FAIL:
      return {
        ...state,
        isLoadedPosts: true
      };

    default:
      return state;
  }
};

export default collageReducer;
