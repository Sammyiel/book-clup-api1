import Books from "../models/books.model.js";


//Add a Book
export async function addBook(req, res) {
    try {
        let book = await Books.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book record created successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book record could not be created at this time'
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

//View a book
export async function viewBook(req, res) {
    try {
        let allbooks = await Books.findAll({ where: { book_id: req.params.id } });
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
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

//View all books
export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Books.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
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

//Update book record
export async function updateBook(req, res) {
    try {
        let theResource = await Books.update(req.body, {
            where: { book_id: req.params.id }
        });
        if (theResource) {
            res.json({
                success: true,
                message: "Book records updated successfully",
                data: theResource
            })
        } else {
            res.json({
                success: false,
                message: "Book records could not be updated",
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

//Delete a book
export async function deleteBook(req, res) {
    try {
        let book_id = req.params.id;
        let toBeDeleted = await Books.destroy({
            where: { book_id: book_id }
        });
        if (toBeDeleted) {
            res.json({
                success: true,
                message: `Resource with ID number ${book_id} is deleted successfully`,
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