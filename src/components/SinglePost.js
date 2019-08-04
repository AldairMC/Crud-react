import React, { Component } from 'react';

class SinglePost extends Component {
    
    viewData = props => {

        if(!props.dataPost) return null
        const { userId, title, body} = this.props.dataPost
        
        return (
            <React.Fragment>
                <div className="card card-body">
                    <h1 className="text-center">{title}</h1>
                    <h5 className="text-left mt-5 mb-3">Autor ID: {userId}</h5>
                    <p className="text-justify">{body}</p>
                </div>
            </React.Fragment>
        )

    }
    
    render() {
        return (
            <div className="container mt-5">
                {this.viewData(this.props)}
            </div>
        );
    }
}

export default SinglePost;