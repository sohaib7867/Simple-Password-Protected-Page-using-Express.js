import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  const password = req.body.password;
       if (password === "sohaib") {
              res.sendFile(__dirname + "/public/secret.html");
       }else{
              res.sendFile(__dirname + "/public/index.html");
       }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});