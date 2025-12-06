import express from 'express';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("api success");
});
app.put('/edit-user', (req, res) => {
    const mydata = req.body;
    console.log(mydata);
    res.send("data edited successfully");
});
app.post('/add-user', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Data added");
});
app.listen(7000, () => {
    console.log("Server running at port 7000");
});