import Table from '../components/Table';
import { useEffect, useState } from 'react';

// Define la interfaz para los datos de los usuarios
interface User {
    id: number;
    nombre: string;
    email: string;
}

const UsersPage = () => {
    // Usa la interfaz 'User' para tipar el estado 'users'
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Cambia la URL a la de tu servicio de API de usuarios
        fetch('http://localhost:8080/api/users') // Verifica el puerto correcto
            .then((response) => response.json())
            .then((data: User[]) => {
                // Asegúrate de que los datos sean del tipo correcto
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Usuarios</h1>
            {/* Asegúrate de que el componente Table esté configurado correctamente para mostrar los datos */}
            <Table data={users} columns={['ID', 'Nombre', 'Email']} />
        </div>
    );
};

export default UsersPage;
