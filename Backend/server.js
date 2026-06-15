import express from 'express';
import 'dotenv/config';
import connectDB from "./config/db.js";
import employeeRoutes from "./Route/employee.routes.js";
import employee from "./model/EmployeeModel.js"

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

connectDB();

app.get("/", async(req, res) => {
    res.send(
        `All the Api will work on port : ${PORT} <br>
         So don't mind that <br>${process.env.author}`)
})

app.use("/employee", employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is working on port:${PORT}`)
})