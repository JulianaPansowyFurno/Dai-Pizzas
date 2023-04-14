import Pizza from './models/pizza.js'
import { /* ObtenerPizza,  ObtenerPizzaID, Eliminar */ Actualizar  } from './services/pizzaService.js';

const pizzaqueso = new Pizza();
pizzaqueso.id = 11;
pizzaqueso.nombre = "queso";
pizzaqueso.descripcion = "muerte a los celiacos";
pizzaqueso.precio = 10890;
pizzaqueso.libreGluten = true;
await Actualizar(10, pizzaqueso);