/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("post_id").unsigned().references("posts.id");
    table.string("name").notNullable();
    table.string("comment").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("comments");
}
