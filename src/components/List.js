import React, { Component } from 'react';
import Post from './Post'

class List extends Component {

    viewPost = () => {
        const post = this.props.infoPosts

        if(post.length === 0) return null

        return (
            <React.Fragment>
                {Object.keys(post).map(post => (
                    <Post 
                        key={post}
                        allPost={this.props.infoPosts[post]}
                    />
                ))}
            </React.Fragment>
        )
    }


    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Accion</th>
                    </tr>    
                </thead>
                <tbody>
                    {this.viewPost()}
                </tbody>        
            </table>
        );
    }
}

export default List;