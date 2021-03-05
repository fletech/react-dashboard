import React from 'react';

import Section from "./Section"
import Header from "./Header"


function Main(props) {
     return(
     <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
               <Header/>
               <Section/>
          </div>

     </div>
     )
}

export default Main