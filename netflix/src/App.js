import React from 'react';
import './App.css';
import Navbar from './Combonent/Navbar/Navbar';
import Banner from './Combonent/Banner/Banner';
import Rowposts from './Combonent/rowposts/Rowposts';
import {acton,orginals,Horrer,comedy,documentaries,trending} from './urls'


function App() {
  return (
   <div>
  <Navbar/>
   <Banner/>
   <Rowposts url={orginals}  title ='Netflix Orginals'/>
   <Rowposts  url={acton} title='Action Movies' isSmall />
   <Rowposts  url={Horrer} title='Horror' isSmall />
   <Rowposts  url={documentaries} title='Documentaries' isSmall />
   <Rowposts  url={trending} title='Trending' isSmall />
   <Rowposts  url={comedy} title='Comedy' isSmall />
 
 
   </div>
  );
}

export default App;
