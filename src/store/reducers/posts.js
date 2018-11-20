import {
  FETCH_POSTS,
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS,
} from './../actions/fetchPostsAction';

import initialState from './../initialState';

const postsReducer = function (state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isLoadedPosts: false
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoadedPosts: true,
        posts: [...state.posts, ...action.posts]
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        isLoadedPosts: true
      };

    default:
      return state;
  }
};

export default postsReducer;