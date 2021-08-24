import react from "react"
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Jumbotron/>
     <Card/>
     <Footer/>
    </div>
    
    
  );
};

export default App;
