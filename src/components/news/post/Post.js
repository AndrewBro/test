import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../../../store/actions/fetchPostsAction';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.fetchPostsAction();
  }

  render() {
    const { posts } = this.props.posts;   

    return (
      <Fragment>
        {          
          this.props.posts.isLoadedPosts ?
            <ul className='news-list'>
              {
                posts && posts.map(post => {
                  return (
                    <li key={post.id}>
                      <a href='hmttps://www.google.com' className='post-link'>
                        <div className='post-image'>
                          <img src='https://picsum.photos/400/300/' alt='post' />
                        </div>
                        <div className='post-title'>{post.title}</div>
                        <div className='post-description'>{post.body}</div>
                      </a>
                    </li>
                  )
                })
              }
            </ul> :
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
      </Fragment>
    );
  }
}



const mapStateToProps = store => {
  return {
    posts: store.posts
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPostsAction: posts => dispatch(fetchPostsAction(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);