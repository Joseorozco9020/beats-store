export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 mt-16 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="text-white font-bold mb-2">Eneki Beats</h3>
          <p>Beats frescos y con vibra. Afrobeat, R&B y más.</p>
        </div>

        <div>
          <h4 className="text-white mb-2">Enlaces</h4>
          <ul className="space-y-1">
            <li>Inicio</li>
            <li>Beats</li>
            <li>Licencias</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-2">Sígueme</h4>
          <div className="flex gap-4 text-xl">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">© 2025 Eneki Beats</div>
    </footer>
  );
}
