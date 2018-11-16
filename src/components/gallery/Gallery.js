import React, { Component } from 'react';
import './gallery.scss';

class Gallery extends Component {
  morePosts = () => {
    this.props.fetchMorePostsAction();
    console.log(this.props);
  }

  render() {
    return (
      <section className='gallery'>
        <h2 className='gallery-title section-title'>Inside company</h2>

      </section>
    );
  }
}


export default Gallery;
// const mapStateToProps = store => {
//   return {
//     posts: store.posts
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   fetchMorePostsAction: morePosts => dispatch(fetchMorePostsAction(morePosts))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Gallery);