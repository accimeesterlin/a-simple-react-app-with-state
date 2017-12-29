import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{


    render(){
        return(
            <div>
                <p>I am the Home Page</p>
                <Link to = '/dashboard'> <button>Go to the Dashboard</button> </Link>
            </div>
        );
    }
}

export default Home;