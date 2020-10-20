const noteCtrl ={};

const Note = require('../models/Node');


noteCtrl.renderNoteForm = (req ,res)=>{
    res.render('notes/new-note')
}

noteCtrl.createNewNote = async (req, res) => {
    const {title,description,validationCustom04,observation,status} = req.body
    const newNote = new Note ({title,description,validationCustom04,observation,status})

    await newNote.save();
    
    res.send('new-note')
}

noteCtrl.renderNotes = async (req, res) =>{
    const notes = await Note.find();

    res.render('notes/all-notes',{title:"Notas" ,notes}) 
}

noteCtrl.renderEditForm = (req ,res )=> {
    res.send('Edit from')
}

noteCtrl.updateNote = (req ,res) =>{
    res.send('actualizado')
}

noteCtrl.deleteNote = (req,res)=>{
    res.send('Eliminando nota')
}
module.exports =  noteCtrl; 