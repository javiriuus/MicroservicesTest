import Table from '../components/Table';
import { useEffect, useState } from 'react';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Realiza una solicitud HTTP para obtener la lista de usuarios
        // Reemplaza `http://localhost:PORT/api/users` con la URL de tu microservicio de usuarios
        fetch('http://localhost:PORT/api/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Usuarios</h1>
            <Table data={users} columns={['ID', 'Nombre', 'Email']} />
        </div>
    );
};

export default UsersPage;
