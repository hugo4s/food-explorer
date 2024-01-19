
exports.up = knex => knex.schema.createTable("refeiçoes", table => {
    table.increments("id")
    table.text("title")
    table.text("description")
    table.integer("user_id").references("id").inTable("users")
}) 
  
exports.down = knex.schema.dropTable("refeiçoes") 
