const axios = require("axios");
const API_URL = "http://localhost:3000";

const getAll = () => {
  return axios
    .get(`${API_URL}/todo`)
    .then(rawResponse => {
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const getOne = () => {
  return axios
    .get(`${API_URL}/todo/01`)
    .then(rawResponse => {
      console.log("Get One Data");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const addNew = () => {
  return axios
    .post(`${API_URL}/todo`, {
      todo: "Add new todo",
      done: true
    })
    .then(rawResponse => {
      console.log("Add new todo");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const deleteData = () => {
  return axios
    .delete(`${API_URL}/todo/0`)
    .then(rawResponse => {
      console.log("Delete data");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const updateData = () => {
  return axios
    .put(`${API_URL}/todo/0`, {
      todo: "Update data",
      done: false
    })
    .then(rawResponse => {
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    })
}

const searchData = () => {
  return axios
    .get(`${API_URL}/todo/search?todo=d`)
    .then(rawResponse => {
      console.log("Data Found");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    })
}

getAll();
getOne();
addNew();
getAll();
deleteData();
getAll();
updateData();
getAll();
searchData();
getAll();