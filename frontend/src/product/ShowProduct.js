// Importa axios para realizar solicitudes HTTP
import axios from 'axios';
// Importa useState y useEffect desde React
import { useState, useEffect } from 'react';
// Importa Link desde react-router-dom para la navegación
import { Link } from 'react-router-dom';

// URI de la API para obtener los productos (corrigiendo el error tipográfico en el protocolo HTTP)
const URI = 'http://localhost:8000/producto/';

// Define el componente CompShowProduct
const CompShowProduct = () => {
    // Define el estado 'producto' con un array vacío como valor inicial
    const [producto, setProducto] = useState([]);
    
    // useEffect para ejecutar getProducts cuando el componente se monte
    useEffect(() => {
        getProducts();
    }, []);
    
    // Función para obtener los productos de la API
    const getProducts = async () => {
        try {
            // Realiza una solicitud GET a la URI
            const res = await axios.get(URI);
            // Actualiza el estado 'producto' con los datos obtenidos
            setProducto(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    
    // Función para eliminar un producto por su ID
    const deleteProduct = async (id) => {
        try {
            // Realiza una solicitud DELETE a la URI con el ID del producto
            await axios.delete(`${URI}${id}`);
            // Vuelve a obtener los productos después de eliminar uno
            getProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {/* Enlace para crear un nuevo producto */}
                    <Link to='/create' className='btn btn-primary mt-2 mb-2'>
                        <i className="fa-solid fa-plus"></i>
                    </Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre Producto</th>
                                <th>Descripcion Producto</th>
                                <th>Cantidad de Productos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {producto.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.NomProduc}</td>
                                    <td>{producto.DecripProduc}</td>
                                    <td>{producto.CantProduc}</td>
                                    <td>
                                        {/* Enlace para editar un producto */}
                                        <Link to={`/edit/${producto.id}`} className="btn btn-info">
                                            <i className="fa-solid fa-pen-nib"></i>
                                        </Link>
                                        {/* Botón para eliminar un producto */}
                                        <button onClick={() => deleteProduct(producto.id)} className='btn btn-danger'>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowProduct;
