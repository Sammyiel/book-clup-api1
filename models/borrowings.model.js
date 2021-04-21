import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Borrowings = sequelize.define('borrowings', {
    isbn: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    book_title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    borrowing_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    member_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    member_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    borrow_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    }
}, {
    sequelize,
    tableName: 'borrowings',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "borrow_id" }
        ]
    }, ]
});

export default Borrowings;