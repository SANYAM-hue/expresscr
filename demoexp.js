//import express module
const express = require('express');
const app = express();

app.use(express.json());//middlware to parse json data

//sample student data
let students =[

    { id: 1, name:"alice", email:"abc@gmail.com"},
    { id: 2, name:"rose", email:"abcde@gmail.com"}
];

//get all students
app.get('/students',(req,res)=>{
    res.json(students); //fixed from res.join(users) to res.json(users)
});

//post -Add a new user
app.post('/students',(req,res)=>{
    const newStudents = { id: students.length + 1,...req.body};
    students.push(newStudents);
    res.status(201).json(newStudents); // Added response after adding a new user
});

// PUT - Update a student
app.put('/students/:id',(req,res) =>{
    const students = students.find(u => u.id === parseInt(req.params.id));
    if (students) return res.status(404).json({ message: "student not found"});
    
    students.name = req.body.name || students.name;
    students.email = req.body.email || students.email;

    res.json(students);
});

//DELETE - Remove a student
app.delete('/students/id',(req,res) =>{
    //
    //
    students = students.filter(students => students.id !== parseInt(req.params.id));
    res.json({ message: 'student Deleted'});
});



app.listen(8000,() => console.log('server is running on port 8000'))