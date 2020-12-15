const fs=require("fs");
const chalk=require("chalk");



//add feature
const addNote= (title,body)=>{
  const notes=loadNotes();
  const duplicateNotes=notes.find((note)=> note.title===title)// array.find ka use kiya idhar means first milne ke baad break ho jayega

  if(!duplicateNotes){
    notes.push({
      title: title,
      body:body
    });
  saveNotes(notes);
  }else{
    console.log('note ki title change kar de bhai');
  }
  
}
const loadNotes=()=>{
  try{
    const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON= dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch(e){
    return [];  
  }

  
  }

  const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

  }

  //remove feature
  const removeNote=(title)=>{
    const notes=loadNotes();
    const dataPresent=notes.filter((note)=>note.title!==title);
      if(dataPresent.length<notes.length){
        console.log(chalk.green.inverse("Remove done!"))
        saveNotes(dataPresent);
      }else{
        console.log(chalk.red.inverse("Remove not done!"))
      }
    

  }
//list ka logic
  const listNotes=()=>{
    const notes=loadNotes();
    if(notes.length==0){
      console.log(chalk.red("not found"))
    }else{
      console.log(chalk.green.inverse("Yours notes"))
      notes.forEach(element => {
        console.log(element.title);
      });
    }
  }
//read logic 
const readNote=(title)=>{

const notes=loadNotes();
const note=notes.find((note)=> note.title===title)
if(note){
  console.log(note.title);
  console.log(note.body);

}else{
  console.log("nothing is there");
}

}




module.exports={
 
  addNote:addNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote
};