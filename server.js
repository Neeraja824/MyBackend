// import express from 'express';
// import studentsRoutes from './routers/studentsRoutes.js';
// import cors from 'cors';
// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use('/',studentsRoutes);

// app.get('/', (req, res) => {
//     res.send("api success");
// });

// app.post('/add-user', (req, res) => {
//     const data = req.body;
//     console.log(data);
//     res.send("Data added");
// });

// app.listen(7000, () => {
//     console.log("Server running at port 7000");
// });


import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import studentRouter from './routers/studentsRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://lankaneeraja824_db_user:neeru%409966@cluster0.tjzue6z.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(7007, () => {
    console.log("server running at port 7007")
});