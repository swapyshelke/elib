import express from "express"

const app = express();

// routes

// app.use("")

app.get("/", (req, res) => {
    res.json({message: "hello there from server"})
})

export default app;