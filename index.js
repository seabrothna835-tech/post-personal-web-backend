import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employee.js";
import advice from "./routes/addviceRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "*"
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api/employees", employeeRoutes);
app.use("/api/advices", advice);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});