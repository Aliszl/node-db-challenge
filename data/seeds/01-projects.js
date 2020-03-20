
exports.seed = function(knex, Promise) {


  return knex('projects').insert([
    {project_name: 'Learn sql', project_description: 'lalala'},
    {project_name: 'Build patio', project_description: 'bahvgdsgfjsg'},
    {project_name: 'build portfolio website', project_description: 'doraymesofar'}
  ]);

};

