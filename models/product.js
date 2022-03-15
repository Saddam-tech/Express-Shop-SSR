const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

// const Cart = require("./cart");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products(title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
//       [this.title, this.imageUrl, this.description, this.price]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     db.execute("SELECT * FROM products");
//   }

//   static findById(id) {
//     db.execute("SELECT * FROM products WHERE id = ?", [id]);
//   }
// };
