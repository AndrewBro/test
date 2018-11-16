import {
  FETCH_POSTS,
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS,
} from "./../actions/fetchPostsAction";
import {
  FETCH_MOREPOSTS_SUCCESS
} from "./../actions/fetchMorePostsAction";

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
        posts: action.posts
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        isLoadedPosts: true
      };
    case FETCH_MOREPOSTS_SUCCESS:      
      return {
        ...state.morePosts,
        // isLoadedPosts: false,
      };
    default:
      return state;
  }
};


export default postsReducer;