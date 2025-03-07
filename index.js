import express from "express"
import routes from "./routes/index.js"
import "dotenv/config";
import"./db.js"

const app = express()

app.use("/api", routes)

app.use((req, res, next) => {
    res.status(404).send("Not Found")
})

app.use((err, req, res, next) => {
  res.status(500).send("Interval Server error");
});

app.listen(8080, () => {
    console.log("Server started in port 8080");
})