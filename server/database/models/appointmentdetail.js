const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AppointmentDetail extends Model {
    static associate(models) {
      // AppointmentDetail.hasOne(models.UserAppointment, { foreignKey: 'appointmentId' });
    }
  }
  AppointmentDetail.init({
    appointmentId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'cancelled', 'done'),
  }, {
    sequelize,
    modelName: 'AppointmentDetail',
  });
  return AppointmentDetail;
};
