import React, { Component } from 'react';
import {BrowserRouter as Ruta, Switch, Route} from 'react-router-dom'
import axios from 'axios';

//components
import Nav from './Nav/Nav';
import Header from './Header';


class Router extends Component {
    render() {
        return (
            <div>
                <Ruta>
                    <Header />

                    <Nav />

                    <Switch>
                        <Route exact path="/" component={}/>
                        <Route exact path="/" component={}/>
                    </Switch>    
                </Ruta> 
            </div>
        );
    }
}

export default Router;