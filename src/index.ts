import express from "express";
import mainRoutes from "./routes/mainRoutes";

const app = express();
const port = 3000;

app.listen(port, (): void => {
  console.log(`server started at localhost/${port}`);
});

app.use("/", mainRoutes);

const myfunct = (num: number): number => {
  return 5 * num;
};
export { myfunct, app };
