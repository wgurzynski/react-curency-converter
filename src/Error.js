import React, { Component } from 'react';
import logo from './logoError.svg';
import './Error.css'

class Error extends Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        
        return (
            
            <div class="wrapper">
                
                <div class="Error">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">This Page does not Exist! </h1>
                </div>
                <div>
                <button c onClick={() => this.nextPath('/') } type="button" class="btn btn-outline-warning">Home</button>
                </div>

            </div>


        );
    }

};

export default Error;
