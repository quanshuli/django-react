import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';


export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<Router>
            <Switch>
                <Route exact path='/'><p>Homepage</p></Route>
                <Route path='/join' component={RoomJoinPage}></Route>
                <Route path='/create' component={CreateRoomPage}></Route>
            </Switch>
        </Router>);
    }
}