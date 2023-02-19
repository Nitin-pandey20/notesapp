const yargs = require('yargs')
//const chalk = require('chalk')
const notes = require('./utility.js')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add',
    builders: {
        title: { 
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
    }
},
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
        console.log('Title: ' + argv.title)
        console.log('Body: '+ argv.body)
    }
})

 yargs.command({
     command: 'remove',
     describe: 'remove a note',
     builders: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
 },
    handler: function(argv){
        notes.removenote(argv.title)
    }
 })
//create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
       // console.log('listing notes');
       notes.listnotes()
    }
})
// read command
yargs.command({
    command: 'read',
    describe: 'reading  all notes',
    builders: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
 },
    handler: function(argv){
       notes.readnotes(argv.title)
    }
})
console.log(yargs.argv)