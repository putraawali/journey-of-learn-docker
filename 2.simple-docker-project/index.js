const express = require("express");

const app = express();

app.get("/", (_, res) => {
    res.send("Hi bro");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
