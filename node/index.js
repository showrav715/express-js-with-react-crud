import express from "express";
import { router as userRoute } from "./routes/users/route.js";

const app = express();
const PORT = 3001;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello world Check");
});

app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
