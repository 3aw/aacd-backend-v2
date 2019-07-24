module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    uid: DataTypes.STRING,
    total: DataTypes.DOUBLE(11, 2),
    status: DataTypes.INTEGER,
    batch_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Payment;
};
