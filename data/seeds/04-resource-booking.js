exports.seed = function(knex) {
 
  return knex('resource-booking-per-project').insert([
    {project_id: 1, resource_id: 1, quantity: '1'},
    {project_id: 2, resource_id: 1, quantity: '1'},
    {project_id: 3, resource_id: 3, quantity: '1'},
    {project_id: 1, resource_id: 2, quantity: '1'},
    {project_id: 2, resource_id: 2, quantity: '1'},
   
  
  ]);

};
