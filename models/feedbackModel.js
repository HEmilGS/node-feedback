const { db } = require('../config/db');

const getFeedbackById = async (id) => {
    try {
        const query = 'SELECT users.name, feedback.feedback FROM users JOIN feedback ON users.id = feedback.user_id WHERE users.id = $1;'
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getFeedbackById };

