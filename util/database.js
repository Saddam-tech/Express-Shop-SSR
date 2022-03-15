const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "credit12345", {
  dialect: "mysql",
  host: "localhost",
});
