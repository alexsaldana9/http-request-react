import React, from { Component } from 'react';

import axios from '../../../axios';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  }


  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        // const updatedPosts = posts.map(post => {
        //   return {
        //     ...post,
        //     author: 'Leia'
        //   }
        // });

        // Added author to first four elements
        const updatedPosts = posts.map(post => Object.assign(post, { author: 'misu' }));

        console.log("Updatedposts ----", updatedPosts);

        //this.setState({posts: response.data});
        this.setState({posts: updatedPosts});
        //console.log("posts: ===>", posts)
      });


  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  }

  render() {
    return(
      <section className="Posts">
        {posts}
      </section>

    );
  }
}
