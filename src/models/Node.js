const { Schema , model} = require('mongoose');

const NoteSchema = new Schema ({

    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required : true
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps : true
});

module.exports = model('Note', NoteSchema);