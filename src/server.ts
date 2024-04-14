import express from "express";
import { router } from "./modules";
const app = express();

app.use(express.json());

app.use('/api', router)

app.listen(3000, () => {
  console.log("Application is running in port 3000");
});
