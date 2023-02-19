const fs = require('fs')
const getNotes = function() {
    return 'your notes'
}
const addNote = function(title, body) {
     const notes = loadNotes()
     console.log(notes)
    const duplicateNotes = notes.filter(function(note){
    return note.title===title
     })
     if(duplicateNotes.length === 0) {
   notes.push({
        title: title,
        body: body
     })
     saveNotes(notes)
      console.log(chalk.red.inverse('new notes added'))
 }
 else {
     console.log('note title taken')
      }
 }
 const removenote = function(title) {
    const notes = loadNotes()
    const notestokeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > notestokeep.length) {
        console.log(('NOTES REMOVED'))
        saveNotes(notestokeep)
    }
    else{
        console.log(('no notes found '))
    }
   
 }




const listnotes =()=>{
   const notes = loadNotes()
   console.log('list notes added')
   notes.forEach((note)=>{
     console.log(note.title) 
 })
}
const readnotes =(title)=>{
    const notes = loadNotes()
    const readablenotes = notes.find((note)=>note.title===title)
  if(readablenotes)
  {
    console.log(readablenotes.title)
    console.log(readablenotes.body)
  }
  else{
    console.log('no such note to read')
  }
 }
 const saveNotes = function(notes) {
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json', dataJSON)
 } 
const loadNotes = function() {
     try{
         const dataBuffer = fs.readFileSync('notes.json', 'utf8')
         const dataJSON = dataBuffer.toString()
         return JSON.parse(dataJSON)
     }catch(e){
         return []
     }

}
module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removenote: removenote,
    listnotes: listnotes,
    readnotes: readnotes,
}