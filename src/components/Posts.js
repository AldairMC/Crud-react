import React, { Component } from 'react';
import List from './List'

class Posts extends Component {
    render() {
        return (
            <div className="col-md-12 text-center">
                <h1>Posts</h1>
                <List 
                    infoPosts={this.props.posts}
                />
            </div>
        );
    }
}

export default Posts;