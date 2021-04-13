import React from "react";
//import { isPropertySignature } from "typescript";

function CreateArea(props) {


  const[inputText, setInputText]= React.useState("") ;

  const[areaText, setAreaText]= React.useState("") ;


  function handleChange(event){
   
    
   // console.log(event.target.value) ;

    setInputText(event.target.value) ;
  }


  function NoteChange(event){

   // console.log(event.target.value) ;
    setAreaText(event.target.value) ;
  }


  function handleSubmit(event){

    //console.log(inputText) ;
    props.add({inputText,areaText}) ;
    setInputText("") ;
    setAreaText("") ;
 event.preventDefault() ;

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name= "title" type="text"  placeholder="Title" value={inputText} />
        <textarea onChange={NoteChange} name="content" value= {areaText} placeholder="Take a note..." rows="3" />
        <button >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
