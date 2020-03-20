
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl=>{
        tbl.increments() 
        tbl.string('project_name', 128).notNullable()
        tbl.string('project_description', 128)
        tbl.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', tbl=>{
        tbl.increments() 
        tbl.string('resource_name', 128).notNullable()
        tbl.string('resource_description', 128)
    })
    .createTable('tasks', tbl => {
        tbl.increments() 
        tbl.string('task_description', 128).notNullable()
        tbl.string('task_notes', 128).notNullable()
        tbl.boolean('task_completed').defaultTo(false)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      })
    .createTable('resource-booking-per-project', tbl => {
        tbl.increments() 
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        tbl.string('quantity').notNullable()
      })
   };
    
   exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resource-booking-per-project')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
   };
