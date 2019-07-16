module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define("Buyer", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return Buyer;
};
