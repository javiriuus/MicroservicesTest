import Table from '../components/Table';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Realiza una solicitud HTTP para obtener la lista de productos
        // Reemplaza `http://localhost:PORT/api/products` con la URL de tu microservicio de productos
        fetch('http://localhost:PORT/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Productos</h1>
            <Table data={products} columns={['ID', 'Nombre', 'Precio', 'Stock']} />
        </div>
    );
};

export default ProductsPage;
