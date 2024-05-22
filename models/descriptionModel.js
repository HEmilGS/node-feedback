const { db } = require('../config/db');

const getDescriptionById = async (id) => {
    try {
        const query = 'SELECT users.name, description.description FROM users JOIN description ON users.id = description.user_id WHERE users.id = $1;'
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getDescriptionById };

