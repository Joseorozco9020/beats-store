export default function BeatCard({ beat }) {
  return (
    <div className="flex items-center justify-between bg-zinc-800 p-3 rounded-lg shadow-md hover:bg-zinc-700 transition">
      <div className="flex items-center gap-4">
        <img src={beat.cover} className="w-16 h-16 object-cover rounded" />

        <div>
          <h3 className="font-semibold text-sm">{beat.title}</h3>

          <div className="flex gap-3 text-xs text-gray-400 mt-1">
            <span>{beat.duration}</span>
            <span>{beat.bpm} BPM</span>

            <span className="bg-zinc-600 px-2 py-0.5 rounded">{beat.tag1}</span>

            <span className="bg-zinc-600 px-2 py-0.5 rounded">{beat.tag2}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://nauxore.gumroad.com/l/goldenheat"
          target="_blank"
          className="border border-yellow-500 text-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
