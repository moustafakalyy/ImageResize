import express from "express";
import images from "./api/imagesRoute";

const mainRoutes = express.Router();

/**
* @description middleware to verify routing
* @param {express.Request} req
* @param {express.Response} res
* @param {Function} next
*/
const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  const url = req.url;
  console.log(`url is visited ${url}`);
  next();
};
mainRoutes.get("/", logger, (req, res) => {
  res.status(200);
  res.send("opened main routes");
});

mainRoutes.use("/images", images);

export default mainRoutes;
