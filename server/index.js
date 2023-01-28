import express from "express";

const app = express();

app.get("/api/users", (req, res) => {
    res.send([
        {
            id: 1,
            name: "Ahmet",
            age: 22
        },
        {
            id: 2,
            name: "Banu",
            age: 25
        },
        {
            id: 3,
            name: "Hasan",
            age: 17
        },
    ])
})

app.post("/api/login" , (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
})


const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log("Listening on port 8080")
})