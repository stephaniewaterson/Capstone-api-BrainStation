/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.integer("location_id").unsigned().references("locations.id");
    table.string("title").notNullable();
    table.text("content").notNullable();
    table.varchar("image");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("posts");
}
