import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// URI de la API para la creación de productos
const URI = 'http://localhost:8000/producto/';

// Define el componente CompCreateProduct
const CompCreateProduct = () => {
    // Define el estado local para los campos del formulario
    const [nomProduct, setNomProduct] = useState('');
    const [descripProduct, setDescripProduct] = useState('');
    const [cantProduc, setCantProduc] = useState('');
    
    // useNavigate para la navegación programática después de crear un producto
    const navigate = useNavigate();

    // Función para manejar el envío del formulario
    const store = async (e) => {
        e.preventDefault();
        try {
            // Realiza una solicitud POST a la URI con los datos del producto
            await axios.post(URI, {
                NomProduc: nomProduct,
                DecripProduc: descripProduct,
                CantProduc: cantProduc
            });
            // Navega a la página principal después de crear el producto
            navigate('/');
        } catch (error) {
            console.error("Error creating product:", error);
            // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo:
            // alert("Error al crear el producto. Inténtalo de nuevo más tarde.");
        }
    };

    return (
        <div>
            <div>
                <h3>Create Product</h3>
                <form onSubmit={store}>
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

                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default CompCreateProduct;
