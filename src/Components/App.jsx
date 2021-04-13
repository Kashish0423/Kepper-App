import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 

 const [items, setItems]= React.useState([{}]) ;

 //const [work, setWork] = React.useState([]) ;




 function addItems(newItem){

  

  //setElement(newItem) ;

  console.log("add") ;
   


    

   // console.log(items) ;

    setItems((prevItems) => {
     // console.log(prevItems) ;
      return [...prevItems, newItem];
    });

    //setItems(["ab", "ac"]);

 }

 function deleteItem(id){
  
  setItems((prevItems) => {
    return prevItems.filter((item, index) => {
      return index !== id;
    });
  });

 }


 console.log(items) ;

  return (
    <div>
      <Header />
      
<CreateArea add= {addItems}/>


      {items.map((noteItem, index) => (
            <Note
           
              key={index}
              id={index}
              title={noteItem.inputText}
             content= {noteItem.areaText}
              onChecked={deleteItem}
             
            />
          ))}



          

      
      <Footer />
    </div>
  );
}

export default App;
