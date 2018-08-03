import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Main extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
                <div class="App">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Currency Converter </h1>
                    <h4>Based on React</h4>

                </div>

            </div>


        );
    }

};

export default Main;
