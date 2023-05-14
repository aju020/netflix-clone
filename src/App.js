import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Rowpost />
    </div>
  );
}

export default App;
