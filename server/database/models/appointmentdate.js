const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AppointmentDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AppointmentDate.hasMany(models.UserAppointment, { as: 'appointments' });
    }
  }
  AppointmentDate.init({
    appointmentDate: DataTypes.DATE,
    status: DataTypes.ENUM('open', 'closed'),
    slots: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'AppointmentDate',
  });
  return AppointmentDate;
};
