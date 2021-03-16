import React from "react" ;

import Header from "./Header" ;
import Footer from "./Footer" ;
import Note from "./Note" ;
import notes from "../notes" ;
import { createNotEmittedStatement } from "typescript";




function App(){


return (

    <div> 
<Header /> 

{notes.map(x=>

    
    <Note 
     
    key= {x.key} 
    heading= {x.title}
    value = {x.content} 
    />

 

)  



}

 <Footer / >
 </div>

) ;

}

export default App ;
