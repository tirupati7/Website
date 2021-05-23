import React, { Component } from 'react';
import './App.css';
import firebase from './firebase/config';
import Header from './header/header'
class App extends Component {
  constructor(props) {
    console.log('constructor is called');
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    console.log('componentDidMount is called');
    const postRef = firebase.database().ref('posts');
    postRef.on('value', (snapshot) => {
      let posts = snapshot.val();
      let newStatePosts = [];
      for (let p in posts) {
        newStatePosts.push({
          id: p,
          title: posts[p].title,
          desc: posts[p].desc,
          image: posts[p].image
        });
      }
      this.setState({
        posts: newStatePosts
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <h3>Our Tirupati</h3>
        <div className="posts-block"> <span>Posts</span>
          {this.state.posts.map((post, i) => {
            console.log('POST DETAILS::::' + JSON.stringify(post))
            return (
              <div className="post-content">
                <div>Title: {post.title} </div>
                <div>Description: {post.desc} </div>
                <img src={post.image} alt="post image"></img>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;