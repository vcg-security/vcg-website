"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen w-full items-center justify-center flex-col gap-8 p-8">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-8">
              Lo sentimos, ha ocurrido un error inesperado.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
              >
                Intentar de nuevo
              </button>
              <Link
                href="/"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
