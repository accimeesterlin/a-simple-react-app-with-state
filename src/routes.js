import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';


// if something is true, that means is logged in
// send them to the Dashboard
// if that thing is not true, that means user is not logged in


const isAuthenticated = true; // coming back from the server, not logged in


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            exact
            {...rest}
            render={(props) => isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
        />
    );
};


class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home}/>
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
