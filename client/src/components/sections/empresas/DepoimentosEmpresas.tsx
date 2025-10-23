// src/components/sections/empresas/DepoimentosEmpresas.tsx
import cover from "../mensal-bellas/assets/workshops/waiting.jpg";

const COLORS = { lilacBg: "#F6EDF9" };

const videos = [
  { id: "video1", title: "Eu saí daqui outra pessoa.", src: "https://www.youtube.com/embed/u31qwQUeGuM" },
  { id: "video2", title: "O clima da equipe mudou em um dia.", src: "https://www.youtube.com/embed/u31qwQUeGuM" },
  { id: "video3", title: "Parecia um abraço coletivo.", src: "https://www.youtube.com/embed/u31qwQUeGuM" },
];

export function DepoimentosEmpresas() {
  return (
    <section className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg }}>
      <div className="container mx-auto px-4">
        <img src={cover} alt="" className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover" loading="lazy" />
        <header className="mx-auto max-w-3xl text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Elas viveram o Bellas — e contam como foi.</h2>
          <p className="mt-2 opacity-90">Mais que um evento, é um antes e depois que seu time não esquece.</p>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <article key={v.id} className="rounded-2xl overflow-hidden bg-white shadow">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={v.src}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-sm opacity-80">{v.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
