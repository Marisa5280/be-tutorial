/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('students_table').del()
  await knex('students_table').insert([
    {id: 1, students: 'Jack'},
    {id: 2, students: 'Nicole'}
  ]);
};