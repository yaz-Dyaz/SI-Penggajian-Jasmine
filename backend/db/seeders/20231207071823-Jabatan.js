'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tjabatan', [
      {
        nama_jabatan: 'Manager',
        biaya_jabatan: 500_000,
        id_divisi: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_jabatan: 'Bawahan',
        biaya_jabatan: 200_000,
        id_divisi: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_jabatan: 'Manager',
        biaya_jabatan: 600_000,
        id_divisi: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_jabatan: 'Manager',
        biaya_jabatan: 400_000,
        id_divisi: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tjabatan', null, {});
  }
};
