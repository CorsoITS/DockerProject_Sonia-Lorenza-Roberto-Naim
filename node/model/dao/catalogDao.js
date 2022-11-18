const { getConnection } = require("../../db/connection")

const listItems = async () => {
    const conn = await getConnection();
    const query = "SELECT * FROM catalog";
    const [rows] = await conn.query(query);
    return rows;
}

// const getCoursesById = async (id) => {
//     const conn = await getConnection();
//     const query = `SELECT * FROM Corsi WHERE Id = ?`;
//     logger.debug('Query Singolo Corso:' + query);

//     const [rows] = await conn.query(query, [id]);
//     logger.debug('Query Singolo Corso Result:', rows[0]);
//     return rows[0];
// }

const insertItem = async (Descrizione, Prezzo) => {
    const conn = await getConnection();
    const query = 'INSERT INTO catalog (Descrizione, Prezzo) VALUES (?, ?)';
    const [res] = await conn.query(query, [Descrizione, Prezzo]);
    return res.insertId;
}

// const updateCourses = async (Id, Titolo, Specializzazione, Durata, Capitoli, IdProf, IsDeleted) => {
//     const conn = await getConnection();
//     const query = 'UPDATE Corsi SET Titolo = ?, Specializzazione = ?, Durata = ?, Capitoli = ?, IdProf = ?, IsDeleted = ? WHERE Id = ?';
//     const [res] = await conn.query(query, [Titolo, Specializzazione, Durata, Capitoli, IdProf, IsDeleted, Id]);

//     return res.affectedRows === 1;
// }

// const deleteCourses = async (id) => {
//     const conn = await getConnection();
//     const query = 'DELETE FROM Corsi WHERE id = ?';
//     const [res] = await conn.query(query, [id]);
//     return res.affectedRows === 1;
// }

module.exports = {
    listItems,
    // getCoursesById,
    insertItem,
    // updateCourses,
    // deleteCourses
}