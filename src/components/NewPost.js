import React, { Component } from 'react';

class NewPost extends Component {

    titleRef = React.createRef();
    bodyRef = React.createRef();

    createPost = (e) => {
        e.preventDefault()

        const data = {
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
            userID: 1
        }

        //Enviardo por props
        this.props.dataNewPost(data)

        //reseteando el form
        e.currentTarget.reset()
    }

    render() {
        return (
            <form className="container col-8 mt-5" onSubmit={this.createPost}>
                <legend className="text-center">Create new post</legend>
                <div className="form-group">
                    <label>Post Title: </label>
                    <input ref={this.titleRef} className="form-control" type="text" placeholder="Post Title"/>
                </div>
                <div className="form-group">
                    <label>Post body: </label>
                    <textarea ref={this.bodyRef} className="form-control" placeholder="Post body"></textarea>
                </div>
                <button className="btn btn-primary"> Submit </button>
            </form>
        );
    }
}

export default NewPost;