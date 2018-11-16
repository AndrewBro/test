import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from './../../store/actions/fetchPostsAction';
import './gallery.scss';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      fullWiew: false
    };
  }

  componentDidMount() {
    this.props.fetchPostsAction();
  }

  render() {
    const { posts } = this.props.posts;

    return (
      <section className='gallery'>
        <h2 className='gallery-title section-title'>Latest news</h2>
        {/*<ul className='gallery-list'>*/}
          {/*{*/}
            {/*posts.map(post => {*/}
              {/*return (*/}
                {/*<li key={post.id} className='post'>*/}
                  {/*<a href='hmttps://www.google.com' className='post-link'>*/}
                    {/*<div className='post-image'>*/}
                      {/*<img src='https://picsum.photos/400/300/' alt='post'/>*/}
                    {/*</div>*/}
                    {/*<div className='post-title'>{post.title}</div>*/}
                    {/*<div className='post-description'>{post.body}</div>*/}
                  {/*</a>*/}
                {/*</li>*/}
              {/*)}*/}
            {/*)*/}
          {/*}*/}
        {/*</ul>*/}
        <ul className={(this.state.fullWiew === true) ?
          'posts-list posts-list--one' : 'posts-list posts-list--three' }>
          {
            posts && posts.map(post => {
              return (
                <li key={post.id} className='post-item'>
                  <div className='post-item--inner'>
                    <div className='post-top'>
                      <img className='post-image'
                           src="https://picsum.photos/600/600/?random" alt="" />
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
// export default Gallery;