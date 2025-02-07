// Root 👉🏻 "routes" Folder 👉🏻 route.js


import express from "express";

// Now import the controllers
import homeController from "../controllers/homeController.js";
import aboutController from "../controllers/AboutController.js";


const router = express.Router();


// Add the Controllers
router.get("/", homeController);
router.get("/about", aboutController);


export default router;