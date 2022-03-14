import express from "express";
import pkg from "../package.json";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import courseRoute from "./routes/course.route";

//Server
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg);
const corsOptions = {};

//Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.status(200).json({
    name: app.get("pkg").name,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});
app.use("/api/v1/courses", courseRoute);

export default app;
