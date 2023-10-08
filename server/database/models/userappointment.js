const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAppointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAppointment.belongsTo(models.User, { foreignKey: 'userId', as: 'client' });
      UserAppointment.belongsTo(models.AppointmentDate, { foreignKey: 'appointmentDateId' });
      UserAppointment.hasMany(models.AppointmentDetail, { as: 'details' });
    }
  }
  UserAppointment.init({
    userId: DataTypes.INTEGER,
    appointmentDateId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'UserAppointment',
  });
  return UserAppointment;
};
