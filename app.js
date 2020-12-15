const chalk=require("chalk");
const yargs=require("yargs");
const util=require("./notes");

//customize the version 
yargs.version("1.1.0"); // version set kiya yaha pr

//create add command
yargs.command({
  command:'add',
  describe:'Adding the note',
  builder:{
    title:{
      describe: "Note title",
      demandOption:true,
      type:'string'
    },
    body:{
      describe:"Description about the title",
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    
    util.addNote(argv.title,argv.body); 

  }
})

//create remove command
yargs.command({
  command:'remove',
  describe:'Removing the note',
  builder:{
    title:{
      describe: "Note title",
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    util.removeNote(argv.title);
  }
})

//create list command
yargs.command({
  command:'list',
  describe:'Listing the Existing note',
  handler(){
    util.listNotes()
  }
})

//Read notes command
yargs.command({
  command:'read',
  describe:'Reading the note',
  builder:{
    title:{
      describe: "Note title",
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    util.readNote(argv.title);
  }
})
yargs.parse();



