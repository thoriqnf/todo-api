// const users = [
//     {
//         id: 1,
//         firstName: "Miftah",
//         lastName: "Faris",
//         userName: "mfaris",
//         address: "Jakarta",
//         email: "miftah@gmail.com",
//         password: "12345678",
//         age: 23
//     },
//     {
//         id: 2,
//         firstName: "Thoriq",
//         lastName: "Nur",
//         userName: "thoriqnf",
//         address: "Jakarta",
//         email: "thoriq@gmail.com",
//         password: "12345678",
//         age: 23
//     },
//     {
//         id: 3,
//         firstName: "Sarah",
//         lastName: "Gushef",
//         userName: "sarahgushef",
//         address: "Jakarta",
//         email: "sarah@gmail.com",
//         password: "12345678",
//         age: 24
//     }
// ];

// module.exports = users;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        default: "tes"
    }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
