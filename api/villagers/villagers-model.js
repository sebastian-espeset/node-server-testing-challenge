const db = require("../../data/db-config");

const getAll = ()=>{
    return db("villagers")
};

module.exports={
    getAll
}