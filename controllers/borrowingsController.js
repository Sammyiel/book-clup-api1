import Borrowings from "../models/borrowings.model.js";


//Add a Borrow record
export async function addRecord(req, res) {
    try {
        let borrow = await Borrowings.findOne({ where: { member_name: req.body.member_name, member_id: req.body.member_id, book_id: req.body.book_id, book_title: req.body.book_title, publish_date: req.body.publish_date } })
        if (!borrow) {
            return res.status(401).json({
                status: "failed",
                message: "No Borrower with that member_name."
            })
        }
        bcrypt.compare(req.body.member_name, member_name, req.body.member_id, member_id, req.body.book_id, book_id, req.body.book_title, book_title, req.body.publish_date).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: "failed",
                    message: "Authentication Failed: Incorrect password."
                })
            }

            let authToken = jwt.sign({ email_address: user.email_address, user_id: user.user_id },
                process.env.AUTH_KEY, { expiresIn: "1h" });
            return res.status(200).json({
                status: true,
                message: "User authentication successful",
                user: { member_name: req.body.member_name, member_id: req.body.member_id, book_id: req.body.book_id, book_title: req.body.book_title, publish_date: req.body.publish_date, user_id: borro.borrow_id },
                token: authToken,
                expiresIn: 3600
            })
        })

    } catch (err) {
        member_name,
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
export async function updateRecord(req, res) {

    try {
        let borrow = await Borrowings.update({ where: { borrow_id: req.params.id } });
        if (borrow) {
            res.status(200).json({
                options: { multi: true },
                then: { nom: req.body.nom },
                //data: nom.splice(0, +1),
                message: 'borrow record updated successfully'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'record could not be updated at this time'
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