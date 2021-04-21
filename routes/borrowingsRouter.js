import express from "express";
import { updateRecord, addRecord, viewRecord, viewAllRecords } from '../controllers/borrowingsController.js'
// import { authenticate } from '../middlewares/auth.js';

const borrowingsRouter = express.Router();

//Add a Borrowing Record
borrowingsRouter.post("/", addRecord);

//View a record borrowings/:id
borrowingsRouter.get("/:id", viewRecord);

//View all mrecords borrowings/
borrowingsRouter.get("/", viewAllRecords);

//Update a record borrowings/
borrowingsRouter.put("/:id", updateRecord);


export default borrowingsRouter;