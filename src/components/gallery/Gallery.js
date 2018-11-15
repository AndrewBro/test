import React, { Component } from 'react';
import axios from 'axios';
import './gallery.scss';

class Gallery extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    const {posts} = this.state;
    console.log(posts);

    return (
      <section className='gallery'>
        <h2 className='gallery-title section-title'>Latest news</h2>
        <ul className='gallery-list'>
          {
            posts.map(post => {
              return (
                <li key={post.id} className='post'>
                  <a href='hmttps://www.google.com' className='post-link'>
                    <div className='post-image'>
                      <img src='https://picsum.photos/400/300/' alt='post'/>
                    </div>
                    <div className='post-title'>{post.title}</div>
                    <div className='post-description'>{post.body}</div>
                  </a>
                </li>
              )}
            )
          }
        </ul>
      </section>
    );
  }
}

export default Gallery;