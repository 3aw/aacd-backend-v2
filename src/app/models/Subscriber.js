module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define("Subscriber", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    rg: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    value: DataTypes.STRING,
    event_id: DataTypes.STRING,
    buyer_id: DataTypes.STRING,
    payment_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Subscriber;
};
