import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app"

var root = document.getElementById("root");
if (root){
    ReactDOM.render(<App />, root);
} else {
    console.log("could not load root");
}