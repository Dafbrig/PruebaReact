import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// URI de la API para la gestión de productos
const URI = 'http://localhost:8000/producto/';

// Define el componente CompEditProduct
const CompEditProduct = () => {
    // Define estados locales para los campos del formulario y navegación
    const [nomProduct, setNomProduct] = useState('');
    const [descripProduct, setDescripProduct] = useState('');
    const [cantProduc, setCantProduc] = useState('');
    const navigate = useNavigate(); // Hook para la navegación programática
    const { id } = useParams(); // Obtén el parámetro de la URL para el ID del producto

    // Función para actualizar un producto existente
    const update = async (e) => {
        e.preventDefault();
        try {
            // Realiza una solicitud PUT a la URI con el ID y los nuevos datos del producto
            await axios.put(`${URI}${id}/`, {
                NomProduc: nomProduct,
                DecripProduc: descripProduct,
                CantProduc: cantProduc
            });
            // Navega de vuelta a la página principal después de actualizar
            navigate('/');
        } catch (error) {
            console.error("Error updating product:", error);
            // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo:
            // alert("Error al actualizar el producto. Inténtalo de nuevo más tarde.");
        }
    };

    // useEffect para obtener los datos del producto al cargar el componente
    useEffect(() => {
        getProductId(); // Llama a la función getProductId para obtener los datos del producto
    }); // El segundo parámetro es un array vacío para asegurar que se ejecute solo una vez al montar el componente

    // Función para obtener los detalles del producto por su ID
    const getProductId = async () => {
        try {
            // Realiza una solicitud GET a la URI con el ID del producto
            const res = await axios.get(`${URI}${id}/`);
            // Actualiza los estados locales con los datos obtenidos del producto
            setNomProduct(res.data.NomProduc);
            setDescripProduct(res.data.DecripProduc);
            setCantProduc(res.data.CantProduc);
        } catch (error) {
            console.error("Error fetching product details:", error);
            // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo:
            // alert("Error al obtener los detalles del producto. Inténtalo de nuevo más tarde.");
        }
    };

    return (
        <div>
            <div>
                <h3>Editar Producto</h3>
                <form onSubmit={update}>
                    <div className="mb-3">
                        <label className="form-label">Nombre Producto</label>
                        <input 
                            value={nomProduct}
                            onChange={(e) => setNomProduct(e.target.value)}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción del Producto</label>
                        <textarea 
                            value={descripProduct}
                            onChange={(e) => setDescripProduct(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cantidad</label>
                        <input 
                            value={cantProduc}
                            onChange={(e) => setCantProduc(e.target.value)}
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                
                    <button type="submit" className="btn btn-primary">Editar</button>
                </form>
            </div>
        </div>
    );
};

// Exporta el componente CompEditProduct para que pueda ser utilizado en otras partes de la aplicación
export default CompEditProduct;
