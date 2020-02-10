const { Todos } = require("../../models");

// Database Mongo
module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todos.find({}).populate(
                "user",
                "userName email"
            );

            res.status(200).send({ data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addData: async (req, res) => {
        try {
            const result = await Todos.create(req.body);
            console.log("result cuy", result);
            res.status(200).send({
                message: "Add new Todosssss",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    getById: (req, res) => {
        res.status(200).send({ message: "Todos route by id" });
    },
    getByUsername: (req, res) => {
        res.status(200).send({ message: "Todos route by username" });
    }
};
