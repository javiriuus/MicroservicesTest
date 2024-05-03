import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
      <div className="space-x-4">
        <Link href="/users">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Ver Usuarios</button>
        </Link>
        <Link href="/products">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Ver Productos</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
