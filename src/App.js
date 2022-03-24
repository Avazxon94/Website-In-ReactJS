import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/responsive/responsive.css';
import Topbar from "./components/topbar/Topbar";
import Section from "./components/section/section";
import Form from "./components/form/Form";
import Reviews from "./components/reviews/reviews";
import Footer from './components/footer/footer';

function App() {
    return ( <
        div className = "App" >
        <
        Topbar / >
        <
        Section / >
        <
        Form / >
        <
        Reviews / >
        <
        Footer / >
        <
        /div>
    )
}

export default App;