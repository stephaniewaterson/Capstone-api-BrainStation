/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("translations", (table) => {
    table.increments("id").primary();
    table.string("spanish").notNullable();
    table.string("english").notNullable();
    table.string("colombian").notNullable();
    table.string("puerto_rican").notNullable();
    table.string("mexican").notNullable();
    table.string("argentinian").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("translations");
}
