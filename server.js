import express from 'express';
import studentsRoutes from './routers/studentsRoutes.js';
const app = express();
app.use(express.json());

app.use('/',studentsRoutes);

app.get('/', (req, res) => {
    res.send("api success");
});

app.post('/add-user', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Data added");
});

app.listen(7000, () => {
    console.log("Server running at port 7000");
});
