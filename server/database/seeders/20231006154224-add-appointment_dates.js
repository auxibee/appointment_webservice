/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('AppointmentDates', [
      {
        appointmentDate: new Date(2023, 10, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentDate: new Date(2023, 10, 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentDate: new Date(2023, 10, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AppointmentDates', { [Sequelize.Op.or]: [{ appointmentDate: 'auxibee@gmail.com' }, { email: 'yaw217@gmail.com' }] });
  },
};
