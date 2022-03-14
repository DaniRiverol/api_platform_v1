import app from "./app";
import "./database";
//Listening
app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);
