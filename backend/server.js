import express from "express";
import cors from "cors";
import userRouter from "./user/user.routes.js";
import con from "./sqldb.js";

const server = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
server.use(cors(corsOptions));

server.use(express.json());

// user
server.use("/api/user", userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to User APIs");
});

// 4. Specify port.
server.listen(3100, () => {
  console.log("Server is running at 3100");

  con.connect((err) => {
    if (err) throw err;
    else {
      console.log("Mysql is Connected");
    }
  });
});
