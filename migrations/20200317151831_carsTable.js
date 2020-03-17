
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increment();

    tbl
        .string('vin').notNullable().index().unique()
        .string('make').notNullable().index()
        .string('model').notNullable().index()
        .string('mileage').notNullable().index()
        .string('transmission').notNullable().index()
        .string('title').notNullable().index()

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
