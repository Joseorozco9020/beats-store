export default function Hero() {
  return (
    <section className="relative">
      <img src="/assets/banner.jpg" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40">
        <h1 className="text-5xl font-bold mb-4">Compra tus beats</h1>

        <p className="max-w-xl text-lg">
          Beats frescos y profesionales listos para tu próximo lanzamiento.
          Afrobeat, R&B y sonidos que elevan tu música.
        </p>

        <button className="mt-6 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded">
          Ver más
        </button>
      </div>
    </section>
  );
}
