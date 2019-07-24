module.exports = (sequelize, DataTypes) => {
  const Batch = sequelize.define("Batch", {
    name: DataTypes.STRING,
    value: DataTypes.DOUBLE(11, 2),
    max: DataTypes.INTEGER
  });

  return Batch;
};
