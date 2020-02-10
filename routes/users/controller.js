// const users = require("../../models/users");
const { Users } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find({});
            res.status(200).send({ message: "showData user", data: result });
        } catch (error) {
            console.log(error);
        }
    },

    addData: async (req, res) => {
        try {
            const data = req.body;
            // const file = req.file;
            const result = await Users.create({
                ...data
            });
            res.status(200).send({ message: "Add new users", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getById: (req, res) => {
        const { id } = req.params;

        const filterById = users.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        });

        res.status(200).send({
            message: `Data user with id ${id}`,
            data: filterById[0]
        });
    },

    postData: (req, res) => {
        try {
            const data = req.body;
            const file = req.file;

            users.push({ ...data, avatar: file.path });

            res.status(200).send({
                message: "New data is successfully added",
                data: users
            });
        } catch (error) {
            console.log(error);
        }
    }
};
