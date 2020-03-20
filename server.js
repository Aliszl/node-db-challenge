const express = require('express');
const helmet = require('helmet');

const db = require('./db-config');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/projects', (req, res) => {

  db('projects')
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/resources', (req, res) => {

  db('resources')
  .then(resources => {
    res.status(200).json(resources);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/tasks', (req, res) => {

  db('tasks')
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

function insert(project) {
  //INSERT INTO projects(project_description,project_name) 
  //values ('Batch cook for week ahead raw sql', 'batch cook');
  return db("projects")
    .insert(project)
}
server.post('/projects', async(req, res) => {
  try{
    const data = await insert(req.body);
    db('projects').insert(req.body)
    res.status(200).json({ data });
  }catch(err){
    console.log(err);
    res.status(500).json({ message: "Fatal error posting new project" });
  }
  
});




module.exports = server;

