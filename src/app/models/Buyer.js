module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define("Buyer", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Buyer;
};
