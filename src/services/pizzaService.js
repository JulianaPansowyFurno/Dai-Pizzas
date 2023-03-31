import sql from 'mssql';
import configDB from '../models/db.js';

export const get2Pizzas = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT TOP 2 * FROM Pizzas');

    console.log(results);
}