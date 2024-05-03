import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const navigateToUsers = () => {
    router.push('/usuarios');
  };

  const navigateToProducts = () => {
    router.push('/productos');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Bienvenido a la página principal</h1>

      <div className="flex space-x-4">
        <button
          onClick={navigateToUsers}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ver Usuarios
        </button>

        <button
          onClick={navigateToProducts}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Ver Productos
        </button>
      </div>
    </main>
  );
}
