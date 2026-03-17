/* import { useEffect, useState } from "react";
import BeatCard from "./BeatCard";

export default function BeatList({ setCurrentBeat }) {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/beats")
      .then((res) => res.json())
      .then((data) => setBeats(data));
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-10 bg-zinc-900 text-white p-6 rounded-lg">
      <div className="flex flex-col gap-3">
        {beats.map((beat) => (
          <BeatCard key={beat.id} beat={beat} setCurrentBeat={setCurrentBeat} />
        ))}
      </div>
    </section>
  );
} */

import { useEffect, useState } from "react";
import BeatCard from "./BeatCard";

export default function BeatList({ setCurrentBeat }) {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    fetch(`${API_URL}/api/beats`)
      .then((res) => res.json())
      .then((data) => setBeats(data));
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-10 bg-zinc-900 text-white p-6 rounded-lg">
      <div className="flex flex-col gap-3">
        {beats.map((beat) => (
          <BeatCard key={beat.id} beat={beat} setCurrentBeat={setCurrentBeat} />
        ))}
      </div>
    </section>
  );
}
