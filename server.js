const express = require("express");
const helmet = require("helmet");

const db = require("./db-config");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/projects", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/resources", (req, res) => {
  db("resources")
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/tasks", (req, res) => {
  db("tasks")
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
  return db("projects").insert(project);
}
server.post("/projects", async (req, res) => {
  try {
    const data = await insert(req.body);
    db("projects").insert(req.body);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fatal error posting new project" });
  }
});

function insertResource(resource){
 //INSERT INTO resources(resource_description,resource_name) values ('scissors raw sql', 'raw');
  return db("resources").insert(resource);
}
server.post("/resources", async (req, res) => {
  try {
    const data = await insertResource(req.body);
    db("resources").insert(req.body);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fatal error posting new resource" });
  }
});

function insertTask(task){
  //INSERT INTO resources(resource_description,resource_name) values ('scissors raw sql', 'raw');
   return db("tasks").insert(task);
 }
 server.post("/tasks", async (req, res) => {
   try {
     const data = await insertTask(req.body);
     db("tasks").insert(req.body);
     res.status(200).json({ data });
   } catch (err) {
     console.log(err);
     res.status(500).json({ message: "Fatal error posting new task" });
   }
 });
module.exports = server;
