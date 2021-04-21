import Member from "../models/members.model.js";


//Add a Member
export async function addMember(req, res) {
    try {
        let member = await Member.create(req.body);
        if (member) {
            res.status(200).json({
                success: true,
                message: 'Member created successfully',
                data: member
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Member could not be created at this time'
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

//View a member
export async function viewMember(req, res) {
    try {
        let allmembers = await Member.findAll({ where: { member_id: req.params.id } });
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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

//View all members
export async function viewAllMembers(req, res) {
    try {
        let allmembers = await Member.findAll();
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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

//Update member record
export async function updateMember(req, res) {

    try {
        let member = await Member.update(req.body, { where: { member_id: req.params.id } });
        if (member) {
            res.status(200).json({
                options: { multi: true },
                then: { nom: req.body.nom },
                //data: nom.splice(0, +1),
                message: 'Member updated successfully'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Member could not be updated at this time'
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

//Delete a member
export async function deleteMember(req, res) {
    try {
        let member_id = req.params.id;
        let toBeDeleted = await Member.destroy({
            where: { member_id: member_id }
        });
        if (toBeDeleted) {
            res.json({
                success: true,
                message: `Member with ID number ${member_id} is deleted successfully`,
            })
        } else {
            res.json({
                success: false,
                message: "Member(s) could not be deleted",
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