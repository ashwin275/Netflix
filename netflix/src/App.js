import React from 'react';
import './App.css';
import Navbar from './Combonent/Navbar/Navbar';
import Banner from './Combonent/Banner/Banner';
import Rowposts from './Combonent/rowposts/Rowposts';
import {acton,orginals} from './urls'
function App() {
  return (
   <div>
  <Navbar/>
   <Banner/>
   <Rowposts url={orginals}  title ='Netflix Orginals'/>
   <Rowposts  url={acton} title='Action Movies' isSmall />
   </div>
  );
}

export default App;
