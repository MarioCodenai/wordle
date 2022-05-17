const connection = require('../../DB/database');

module.exports = {
    async obtener() {
        const response = await connection.query('SELECT palabra FROM palabras');
        return response.rows;
    }
}