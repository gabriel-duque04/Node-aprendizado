const express = require('express');
//const { use } = require('react');
//const ejs = require('ejs');


const app = express();
app.use(express.json());
const UserModel = require('../src/models/user.model');

app.set('view engine' , 'ejs');
app.set('views' , "src/views");

app.get("/views/users", async (req,res) => {
    const users = await UserModel.find({});

    res.render("index", {users});
});

app.use((req,res, next) => {
    console.log(`Request type: ${req.method}`);
    console.log(`Content type: ${req.headers["content-type"]}`)
    next();
});


////////////////////////    CRUD    ////////////////////////


//READ
app.get('/users', async (req,res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//CREATE
app.post("/users", async (req,res) => {
    try{
    const user = await UserModel.create(req.body)

    res.status(201).json(user);
    }catch(error){
        res.status(500).send(error.message);
    }
});

//READ BY ID
app.get('/users/:id', async (req,res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//UPDATE
app.patch('/users/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id,req.body, {new: true});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//DELETE
app.delete('/users/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        return res.status(500).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;
app.listen(port, () => console.log(`Rodendo com express na porta: ${port}!`));
