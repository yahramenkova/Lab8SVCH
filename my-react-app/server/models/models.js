const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    name: { type: DataTypes.STRING },
}, {
    timestamps: false
});

const Product = sequelize.define('product', {
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    image: { type: DataTypes.STRING },
}, {
    timestamps: false
});

const Promotion = sequelize.define('promotion', {
    promotion_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    discount: { type: DataTypes.FLOAT, allowNull: false },
    image: { type: DataTypes.STRING },
}, {
    timestamps: false
});

const Cart = sequelize.define('cart', {
    cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    product_id: { type: DataTypes.INTEGER },
    quantity: { type: DataTypes.INTEGER },
}, {
    timestamps: false
});

// Определение связей между моделями
User.hasMany(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

Product.hasMany(Cart, { foreignKey: 'product_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
    User,
    Product,
    Promotion,
    Cart,
};