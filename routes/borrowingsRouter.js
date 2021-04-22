import express from "express";
import { viewRecord, viewAllRecords, addBorrowing, updateBorrowing, deleteBorrowing } from '../controllers/borrowingsController.js'
// import { authenticate } from '../middlewares/auth.js';

const borrowingsRouter = express.Router();

//Add a Borrowing Record
borrowingsRouter.post("/", addBorrowing);

//View a record borrowings/:id
borrowingsRouter.get("/:id", viewRecord);

//View all mrecords borrowings/
borrowingsRouter.get("/", viewAllRecords);

//Update a record borrowings/
borrowingsRouter.put("/:id", updateBorrowing);

// Delete a record borrowings/
borrowingsRouter.put("/:id", deleteBorrowing);


export default borrowingsRouter;