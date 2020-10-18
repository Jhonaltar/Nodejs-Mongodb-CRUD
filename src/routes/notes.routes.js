const {Router} = require('express');
const router = Router();


const { 
    renderNoteForm,
    createNewNote ,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote} = require('../controllers/nodes.controller');

//new note
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note',createNewNote);

//Get All note
router.get('/notes',renderNotes);

//edit notes
router.get('/notes/edit/:id',renderEditForm);

router.put('/notes/edit/:id',updateNote);

//delete note
router.delete('/notes/detele/:id',deleteNote);

module.exports = router