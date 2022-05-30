// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});
// Products belongToMany Tags (through ProductTag)
//Belongs to, hasMany, Belong to many are methods from sequelize
// Tags belongToMany Products (through ProductTag)
//any time that there's a many to many relationship you must define the "through:" which
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
