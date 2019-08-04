import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    
    render() {

        const { id, title } = this.props.allPost

        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary "> Ir </Link>
                    <button 
                        className="btn btn-danger"
                        onClick={ () => {this.props.deletePost(id)}}> Delete   
                    </button>
                    <button 
                        className="btn btn-warning"
                        > Edit
                    </button>                   
                </td>
            </tr>
        );
    }
}

export default Post;