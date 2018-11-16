import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMorePostsAction } from '../../store/actions/fetchMorePostsAction';
import Posts from "./post/Post";
import './news.scss';

class News extends Component {
  morePosts = () => {
    this.props.fetchMorePostsAction();
    console.log(this.props);
  }

  render() {
    return (
      <section className='news'>
        <h2 className='news-title section-title'>Latest news</h2>
        <Posts />
        <div className="more-posts">
          <button onClick={this.morePosts}
            className="button">
            More News</button>
        </div>
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
  fetchMorePostsAction: morePosts => dispatch(fetchMorePostsAction(morePosts))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);