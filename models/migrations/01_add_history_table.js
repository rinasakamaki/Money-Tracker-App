exports.up = function(knex, Promise) {
  return knex.schema.createTable("history", t => {
    t.increments().index();

    t.string("name", 100).notNullable();
    t.string("cost", 100).notNullable();
    t.string("year", 100).notNullable();
    t.string("month", 100).notNullable();
    t.string("day", 100).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("history");
};
