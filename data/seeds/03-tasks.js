
exports.seed = function(knex, Promise) {


  return knex('tasks').insert([
    {task_description: 'read about it', task_notes: 'hoihohohj', project_id: 1},
    {task_description: 'practice it', task_notes: 'yhdthjrt', project_id: 1},
    {task_description: 'gfhsf', task_notes: 'sgs', project_id: 2},
    {task_description: 'dig a hole', task_notes: 'tsh', project_id: 3},
    {task_description: 'level the ground', task_notes: 'estgesw', project_id: 3},
  ]);

};
