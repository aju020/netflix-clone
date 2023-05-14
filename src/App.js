import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {originals,actions, horror, romance, documentaries, comedy} from "./urls"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Rowpost        title='Netflix-originals'    url={originals}   />
        <Rowpost     url={actions}    title=' Action'         isSmall         />
        <Rowpost     url={comedy}    title='Comedy'         isSmall         />
        <Rowpost     url={horror}    title='Horror'         isSmall         />
        <Rowpost     url={romance}    title='Romance'         isSmall         />
        <Rowpost     url={documentaries}    title=' Documentaries'         isSmall         />
    </div>
  );
}

export default App;
