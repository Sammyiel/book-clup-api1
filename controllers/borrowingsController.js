import Borrowings from "../models/borrowings.model.js";


//Add a Borrow record
export async function addBorrowing(req, res) {
    try {
        let borrowing = await Borrowings.create(req.body);
        if (borrowing) {
            res.status(200).json({
                success: true,
                message: 'Borrowing record created successfully',
                data: borrowing
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Borrowing record could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a borrow record
export async function viewRecord(req, res) {
    try {
        let borrow = await Borrowings.findAll({ where: { borrow_id: req.params.id } });
        if (borrow) {
            res.json({
                success: true,
                message: 'Borrowing records retrieved successfully',
                data: borrow
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrowing records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all borrowing records
export async function viewAllRecords(req, res) {
    try {
        let allrecords = await Borrowings.findAll();
        if (allrecords) {
            res.json({
                success: true,
                message: 'Borrowing records retrieved successfully',
                data: allrecords
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrowing records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update a borrowing record
export async function updateBorrowing(req, res) {
    try {
        let theResource = await Borrowings.update(req.body, {
            where: { borrow_id: req.params.id }
        });
        if (theResource) {
            res.json({
                success: true,
                message: "Borrowing records updated successfully",
                data: theResource
            })
        } else {
            res.json({
                success: false,
                message: "Borrowing records could not be updated",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}

// Delete borrow records
export async function deleteBorrowing(req, res) {
    try {
        let borrow_id = req.params.id;
        let toBeDeleted = await Borrowings.destroy({
            where: { book_id: borrow_id }
        });
        if (toBeDeleted) {
            res.json({
                success: true,
                message: `Resource with ID number ${borrow_id} is deleted successfully`,
            })
        } else {
            res.json({
                success: false,
                message: "Resource(s) could not be deleted",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}