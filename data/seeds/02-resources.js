
exports.seed = function(knex, Promise) {


  return knex('resources').insert([
    {resource_name: 'White board', resource_description: 'hoihohohj'},
    {resource_name: 'Printer', resource_description: 'a printer'},
    {resource_name: 'spade', resource_description: 'spader'}
  ]);

};
