import React, { Component } from 'react';
import {BrowserRouter as Ruta, Switch, Route} from 'react-router-dom'
import axios from 'axios';

//components
import Nav from './Nav/Nav';
import Header from './Header';
import Posts from './Posts';
import SinglePost from './SinglePost';
import NewPost from './NewPost';
import Error from './Error';


class Router extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        this.getPost()
    }

    getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    deletePost = id => {

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if(res.status === 200){
                    const copy = [...this.state.posts]
                    let result = copy.filter( key => (
                        key.id !== id
                    ))
                    this.setState({
                        posts: result
                    })        
                }
            })
    }

    dataNewPost = (dpost) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {dpost})
            .then(res => {
                if(res.status === 201){
                    let postId = {id: res.data.id}
                    const newPost = Object.assign({}, res.data.dpost, postId)

                    this.setState(prevState => ({
                        posts: [...prevState.posts, newPost]
                    }) )
                }
            })
    }

    render() {
        return (
            <div>
                <Ruta>
                    <Header />

                    <Nav />

                    <Switch>
                        <Route exact path="/" render={ () => {
                            return (
                                <Posts
                                    deletePost={this.deletePost} 
                                    posts={this.state.posts}
                                />   
                            )
                        }
                            }
                        />
                        <Route exact path="/post/:postId" render={ props => {
                            let idPost = props.location.pathname.replace( '/post/', '') 
        
                            const post = this.state.posts
                            let filtro 
                            filtro = post.filter(post => (
                                post.id === parseInt(idPost) 
                            ))
                            
                            return (
                                <SinglePost 
                                    dataPost={filtro[0]}
                                />
                            )
                        }} 
                        />
                        <Route exact path="/new" render={() => {
                            return (
                                <NewPost 
                                    dataNewPost={this.dataNewPost}
                            />)
                        }} />
                        <Route exact component={Error} />
                    </Switch>    
                </Ruta> 
            </div>
        );
    }
}

export default Router;