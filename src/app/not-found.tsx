export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center flex-col gap-8 p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
