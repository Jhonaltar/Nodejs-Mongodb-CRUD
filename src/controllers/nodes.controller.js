const noteCtrl ={}

noteCtrl.renderNoteForm = (req ,res)=>{
    res.render('notes/new-note')
    //res.send('aaa')
}

noteCtrl.createNewNote = (req, res) => {
    console.log(req.body);
    
    res.send('new-note')
}

noteCtrl.renderNotes = (req, res) =>{
    //res.send('rednerizar nota')
    res.render('notes/notes')
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