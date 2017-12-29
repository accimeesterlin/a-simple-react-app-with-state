import React from 'react';
import {Link} from 'react-router-dom';

// State


// two ways
    // state = {
    //     username: 'accimeesterlin',
    //     age: 5,
    //     address: '8890 Terrace'
    // };


class Dashboard extends React.Component {

    constructor() {
        super();

        this.state = {
            username: 'accimeesterlin',
            age: 5,
            address: '8890 Terrace'
        }
    }

    changeName = () => {
        this.setState({username: 'Patrick', age: 10, address:'New York'});
    };

    getValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    getAllState = () => {
      console.log("State: ", this.state);
    };

    render() {
        return (
            <div>
                <p>I am the Dashboard</p>
                <p>Username: {this.state.username}</p>
                <p>Age: {this.state.age}</p>
                <p>address: {this.state.address}</p>

                <input type="text" name = 'username' onChange={this.getValue}/> <br/>
                <input type="password" name = 'password' onChange={this.getValue}/> <br/>
                <input type="password" name = 'car' onChange={this.getValue}/> <br/>
                <input type="password" name = 'movie' onChange={this.getValue}/> <br/>

                <button onClick={this.getAllState}>Send </button>
                <Link to='/'>
                    <button>Go to home</button>
                </Link>
            </div>
        );
    }
}

export default Dashboard;