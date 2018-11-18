import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPostsAction} from "../../store/actions/fetchPostsAction";
import './news.scss';

class News extends Component {
  componentDidMount() {
    this.props.fetchPostsAction();
  }

  morePosts = () => {
    this.props.fetchPostsAction();
  };

  render() {
    const { posts } = this.props.posts;
    const fakeImage = `https://picsum.photos/200/300/?random`;
    // const fakeImage = `https://picsum.photos/400/300/`;

    return (
      <section className='news'>
        <h2 className='news-title section-title'>Latest news</h2>
          {
            this.props.posts.isLoadedPosts ?
              <ul className='news-list'>
                {
                  posts.map((post, i) => {
                    return (
                      <li key={i}>
                        <a href='hmttps://www.google.com' className='post-link'>
                          <div className='post-image'>
                            <img src={fakeImage} alt='post' />
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

        <div className="more-posts more">
          <button onClick={this.morePosts}
            className="button">
            More News</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  posts: store.posts
});
// const mapStateToProps = store => {
//   // console.log('q-> ', store.posts);
//   return store.posts
// };

const mapDispatchToProps = dispatch => ({
  fetchPostsAction: posts => dispatch(fetchPostsAction(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
