import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Landing from '../Landing/Landing';
import EpisodeList from '../EpisodeList/EpisodeList';

class Navbar extends Component {
  render() {
    return (
        <Router>

            <nav class="bg-blue-200 shadow-lg">
                <div class="container mx-auto">
                    <div class="sm:flex justify-around">
                    
                    <a href="#" class="text-white text-3xl font-bold p-3">Findnime</a>

                    <ul class="text-gray-400 sm:self-center text-xl border-t sm:border-none">
                        <li class="sm:inline-block">
                            <a href="/" class="p-3 hover:text-white">Home</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/episode/:anime" render={(props) => <EpisodeList anime={props.match.params.anime} /> } />
                <Route exact path="/" component={Landing}></Route>
            </Switch>
        </Router>
    );
  }
}

export default Navbar;