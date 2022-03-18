const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-express", "root", "credit12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
