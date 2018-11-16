import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchPostsAction } from './../../store/actions/fetchPostsAction';
import Posts from "./posts/Posts";
import './gallery.scss';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  morePosts = () => {
    // this.props.fetchPostsAction();
  }

  render() {
    return (
      <section className='gallery'>
        <h2 className='gallery-title section-title'>Latest news</h2>

        <Posts more='' />

        <div className="more-posts">
          <button onClick={this.morePosts}>
            More News</button>
        </div>
      </section>
    );
  }
}



// const mapStateToProps = store => {
//   console.log('STORE', store);
  
//   return {
//     posts: store.posts
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   fetchPostsAction: posts => dispatch(fetchPostsAction(posts))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default Gallery;