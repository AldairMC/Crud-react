import React, { Component } from 'react';
import {BrowserRouter as Ruta, Switch, Route} from 'react-router-dom'
import axios from 'axios';

//components
import Nav from './Nav/Nav';
import Header from './Header';
import Posts from './Posts';


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
                                    posts={this.state.posts}
                                />   
                            )
                        }
                            }
                        />
                    </Switch>    
                </Ruta> 
            </div>
        );
    }
}

export default Router;