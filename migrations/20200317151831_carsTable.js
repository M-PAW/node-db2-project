
exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.increment();

    tbl
        .string('vin').notNullable().index().unique()
        .string('make').notNullable().index()
        .string('model').notNullable().index()
        .string('mileage').notNullable().index()

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
