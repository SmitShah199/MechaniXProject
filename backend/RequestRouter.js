import express from "express";
import * as RequestController from "../controllers/RequestController.js";
const requestRouter = express.Router();
requestRouter.get("/",RequestController.all)
requestRouter.get("/bymail/:email", RequestController.allRequests);
requestRouter.get("/mechanic/:name", RequestController.mechanicRequests);
requestRouter.patch("/accept/:id",RequestController.accept)
requestRouter.patch("/reject/:id",RequestController.reject)
requestRouter.get("/:id", RequestController.requestGetById);
requestRouter.post("/", RequestController.addRequest);
requestRouter.patch("/:id", RequestController.updateRequest);
requestRouter.delete("/:id", RequestController.deleteRequest);
export default requestRouter;
