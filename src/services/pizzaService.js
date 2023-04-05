import sql from 'mssql';
import configDB from '../models/db.js';
import Pizza from '../models/pizza.js'

export const AgregarPizza = async () => {
    const conn = await sql.connect(configDB);
    const pizza = new Pizza();
    pizza.nombre = 'Test';
    pizza.descripcion  = 'Test';
    pizza.precio = 100;
    pizza.libreGluten = false;
    const results = await conn.request()
    .input("pNombre", pizza.nombre)
    .input("pDescripcion", pizza.descripcion)
    .input("pImporte", pizza.precio)
    .input("pLibreGluten", pizza.libreGluten)
    .query('INSERT INTO Pizzas(Nombre, Descripcion, LibreGluten, Importe) VALUES (@pNombre, @pDescripcion, @pLibreGluten, @pImporte)');

    console.log(results);
    
}

export const ObtenerPizza = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');
    console.log(results);
}

export const ObtenerPizzaID = async (Id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", Id).query('SELECT * FROM Pizzas WHERE Id = @pId');
    console.log(results);
}

export const Eliminar = async (Id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", Id).query('DELETE FROM Pizzas WHERE Id = @pId');
    console.log(results);
}

