import React, { Component } from 'react';
import './colage.scss';


class Colage extends Component {
  morePosts = () => {
    this.props.fetchMorePostsAction();
    console.log(this.props);
  }

  render() {
    const fakeImage = `https://picsum.photos/400/300/`;

    return (
      <section className='colage'>
        <h2 className='colage-title section-title'>Inside company</h2>
          <ul className='colage-list'>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
            <li><img src={fakeImage} alt=""/></li>
          </ul>



      </section>
    );
  }
}

export default Colage;
// const mapStateToProps = store => {
//   return {
//     posts: store.posts
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   fetchMorePostsAction: morePosts => dispatch(fetchMorePostsAction(morePosts))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Gallery);