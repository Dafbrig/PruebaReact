// Importa el modelo de producto desde el archivo del modelo
import productModel from "../models/ModelProduc.js";

// Controlador para obtener todos los productos
export const getAllProduct = async (req, res) => {
    try {
        // Encuentra todos los registros en la tabla de productos
        const products = await productModel.findAll();
        // Envía los productos encontrados como respuesta en formato JSON
        res.json(products);
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Controlador para obtener un producto específico por su ID
export const getProduct = async (req, res) => {
    try {
        // Encuentra todos los registros en la tabla de productos donde el IdProduc coincide con el ID proporcionado en los parámetros de la solicitud
        const products = await productModel.findAll({
            where: { IdProduc: req.params.id }
        });
        // Envía los productos encontrados como respuesta en formato JSON
        res.json(products);
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Controlador para insertar un nuevo producto
export const insertProduct = async (req, res) => {
    try {
        // Crea un nuevo registro en la tabla de productos con los datos proporcionados en el cuerpo de la solicitud
        await productModel.create(req.body);
        // Envía un mensaje de éxito en formato JSON
        res.json({
            "message": "Registro exitoso"
        });
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Controlador para actualizar un producto existente por su ID
export const updateProduct = async (req, res) => {
    try {
        // Actualiza el registro en la tabla de productos donde el IdProduc coincide con el ID proporcionado en los parámetros de la solicitud
        await productModel.update(req.body, {
            where: { IdProduc: req.params.id }
        });
        // Envía un mensaje de éxito en formato JSON
        res.json({
            "message": "Update exitoso"
        });
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Controlador para eliminar un producto existente por su ID
export const deleteProduct = async (req, res) => {
    try {
        // Elimina el registro en la tabla de productos donde el IdProduc coincide con el ID proporcionado en los parámetros de la solicitud
        await productModel.destroy({
            where: { IdProduc: req.params.id }
        });
        // Envía un mensaje de éxito en formato JSON
        res.json({
            "message": "Delete exitoso"
        });
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}