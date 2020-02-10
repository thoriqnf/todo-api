const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: "PROGRESS"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});

const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;
