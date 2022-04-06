const express = require("express");
const cors = require("cors");

const app = express();
const port = 8888;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});