const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");

const Product = require("./models/productModel");

const app = express();
app.use(express.json()); // to send data with JSON

mongoose
    .connect(
        "mongodb+srv://masterofblafu:BPLnSK5ncOiZEzYL@backenddb.lkpgv.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB"
    )
    .then(() => {
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
        console.log("Connected to the DB!");
    })
    .catch(() => {
        console.log("Failed to connect to the DB!");
    });

app.get("/", (req, res) => {
    res.send("Hello from Node API Server!");
});

app.use("/api/products", productRoute);
